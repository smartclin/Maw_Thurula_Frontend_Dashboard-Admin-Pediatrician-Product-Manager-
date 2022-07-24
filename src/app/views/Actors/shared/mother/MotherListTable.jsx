import { Box } from '@mui/material';
import { MatxProgressBar, SimpleCard } from 'app/components';
import { Small } from 'app/components/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import MaterialTable from "material-table";
const data=[
        { name: 'Mehmet', posts: 10, comments: 1987, },
        { name: 'Zerya Betül Zerya Betül Zerya Betül Zerya Betül', posts: 23, comments: 2017, },
    { name: 'Mehmet', posts: 10, comments: 1987, },
    { name: 'Zerya Betül Zerya Betül Zerya Betül Zerya Betül', posts: 23, comments: 2017, },
    { name: 'Mehmet', posts: 10, comments: 1987, },
    { name: 'Zerya Betül Zerya Betül Zerya Betül Zerya Betül', posts: 23, comments: 2017, },
    { name: 'Mehmet', posts: 10, comments: 1987, },
    { name: 'Zerya Betül Zerya Betül Zerya Betül Zerya Betül', posts: 23, comments: 2017, },
    { name: 'Mehmet', posts: 10, comments: 1987, },
    { name: 'Zerya Betül Zerya Betül Zerya Betül Zerya Betül', posts: 23, comments: 2017, },
    { name: 'Mehmet', posts: 10, comments: 1987, },
    { name: 'Zerya Betül Zerya Betül Zerya Betül Zerya Betül', posts: 23, comments: 2017, },
    { name: 'Mehmet', posts: 10, comments: 1987, },
    { name: 'Zerya Betül Zerya Betül Zerya Betül Zerya Betül', posts: 23, comments: 2017, },
]
const MotherList = () => {

    return (
        <MaterialTable
            title="Registered Mothers List"
            columns={[
              { title: 'Name', field: 'name',
                  headerStyle: {
                      // backgroundColor: '#039be5',
                      paddingLeft:30
                  },
                  cellStyle: {
                      textAlign: "left",
                      paddingLeft:30

                  }

              },
              { title: 'Posts', field: 'posts',type: 'numeric',
                  headerStyle: {
                      // backgroundColor: '#1a5d37',
                      textAlign: "left"
                  },
                  cellStyle: {
                      textAlign: "left",
                      paddingLeft:30

                  }
              },
              { title: 'Comments', field: 'comments', type: 'numeric',
                  headerStyle: {
                      // backgroundColor: '#dde503',
                      textAlign: "left"                  },
                  cellStyle: {
                      minWidth: 10,
                      maxWidth: 10,
                      textAlign: "left",
                      paddingLeft:30
                  }
              },
            ]}
            data={data}
            actions={[
              {
                icon: LockOutlinedIcon,
                tooltip: 'Save User',
                onClick: (event, rowData) => alert("You saved " + rowData.name)
              },
              {
                icon: LockOpenOutlinedIcon,
                tooltip: 'Delete User',
                onClick: (event, rowData) => alert("You want to delete " + rowData.name)
              }
            ]}
            options={{
                rowStyle: {
                    fontSize:12.5,
                    color:'#91909E'
                },


            }}
        />
    )
};

export default MotherList;
