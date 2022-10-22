import jwt from 'jsonwebtoken';
import Mock from '../mock';
import API from '../../../src/app/services/baseURL';
import options from '../../../src/app/services/option';
import axios from "axios";

const JWT_SECRET = 'jwt_secret_key';
const JWT_VALIDITY = '7 days';


const userList1 = [
  {
    id: 1,
    role: 'ADMIN',
    name: 'Hansana Ranaweera',
    username: 'Hansana 987',
    email: 'jason@ui-lib.com',
    avatar: '/assets/images/face-6.jpg',
    age: 25,
  },
];
 let userList=[]


Mock.onPost('/api/auth/login').reply(async (config) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const { email } = JSON.parse(config.data);
    const { password } = JSON.parse(config.data)
    const response = await API.get(`login`, {
      params: {
        email: email,
        password:password
      }
    }, options);
    console.log("database data")
    console.log(response.data.token)
    // const user_id=response.data.user_id
     userList=[
      {
        id: response.data.data[0].user_id,
        role: response.data.data[0].type,
        name: response.data.data[0].name,
        username: response.data.data[0].last_name,
        email: response.data.data[0].email,
        avatar: response.data.data[0].profile_picture,
        age: response.data.data[0].login_status,
      },
    ];
    console.log("user list")
    console.log(userList1)
    const token=response.data.token;
    const user = userList.find((u) => u.email === email);

    if (!user) {
      return [400, { message: 'Invalid email or password' }];
    }
    const accessToken = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: JWT_VALIDITY,
    });

    console.log("token")
    console.log(accessToken)
    localStorage.setItem("role", user.role)
    localStorage.setItem("id", user.id)
    // $window.localStorage.setItem('user', JSON.stringify(user));
    // this.currentUser = user;

    return [
      200,
      {
        accessToken,
        user: {
          id: user.id,
          avatar: user.avatar,
          email: user.email,
          name: user.name,
          role: user.role,
        },
      },
    ];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

Mock.onPost('/api/auth/register').reply((config) => {
  try {
    const { email, username,password } = JSON.parse(config.data);
    console.log(email)
    /*const user = userList.find((u) => u.email === email);
    if (user) {
      return [400, { message: 'User already exists!' }];
    }*/
   /* const newUser = {
      name: username,
      email: email,
      password:password,
    };*/
    /*const response= API.post('/reg',{
      data:{
        'name': username,
        'email': email,
        'password':password
      },options);
    console.log(response.data)
    return response.data;
    };*/

    axios({
      method: 'post',
      url: '/reg',
      data: {
        'name': username,
        'email': email,
        'password':password
      },

      //headers: {'Authorization': 'Bearer ...'}
    });
   // userList.push(newUser);

 /* const accessToken = jwt.sign({ userId: newUser.id }, JWT_SECRET, {
      expiresIn: JWT_VALIDITY,
    });*/

  /* return [
      200,
      {
        accessToken,
        user: {
          id: newUser.id,
          avatar: newUser.avatar,
          email: newUser.email,
          name: newUser.name,
          username: newUser.username,
          role: newUser.role,
        },
      },
    ];*/
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

Mock.onGet('/api/auth/profile').reply((config) => {
  try {
    const { Authorization } = config.headers;
    if (!Authorization) {
      return [401, { message: 'Invalid Authorization token' }];
    }

    const accessToken = Authorization.split(' ')[1];
    const { userId } = jwt.verify(accessToken, JWT_SECRET);
    const user = userList.find((u) => u.id === userId);

    if (!user) {
      return [401, { message: 'Invalid authorization token' }];
    }

    return [
      200,
      {
        user: {
          id: user.id,
          avatar: user.avatar,
          email: user.email,
          name: user.name,
          role: user.role,
        },
      },
    ];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});
