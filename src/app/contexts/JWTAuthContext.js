import  React, { createContext, useEffect, useReducer } from 'react'
import jwtDecode from 'jwt-decode'
import axios from 'axios.js'
import { MatxLoading } from 'app/components'
import {navigations_ADMIN, navigations_AL, navigations_NP, navigations_PM, navigations_PT} from "../navigations";
import API from '../services/baseURL'
const initialState = {
    isAuthenticated: false,
    isInitialised: false,
    user: null,
}

const isValidToken = (accessToken) => {
    if (!accessToken) {
        return false
    }

    const decodedToken = jwtDecode(accessToken)
    const currentTime = Date.now() / 1000
    return decodedToken.exp > currentTime
}

const setSession = (accessToken) => {
    if (accessToken) {
        localStorage.setItem('accessToken', accessToken)
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
    }
    else {
        localStorage.removeItem('accessToken')
        delete axios.defaults.headers.common.Authorization
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'INIT': {
            const { isAuthenticated, user } = action.payload

            return {
                ...state,
                isAuthenticated,
                isInitialised: true,
                user,
            }
        }
        case 'LOGIN': {
            const { user } = action.payload
            console.log("--------------------------------------------------")
            console.log( user )
            return {
                ...state,
                isAuthenticated: true,
                user,
            }
        }
        case 'LOGOUT': {
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            }
        }
        case 'REGISTER': {
            const { user } = action.payload

            return {
                ...state,
                isAuthenticated: true,
                user,
            }
        }
        default: {
            return { ...state }
        }
    }
}

const AuthContext = createContext({
    ...initialState,
    method: 'JWT',
    login: () => Promise.resolve(),
    logout: () => { },
    register: () => Promise.resolve(),
})

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    const login = async (email, password) => {
        const response = await axios.post('/api/auth/login', {
            email,
            password,
        })
        console.log("came to login")
        const { accessToken, user } = response.data

        setSession(accessToken)

        dispatch({
            type: 'LOGIN',
            payload: {
                user,
            },
        })
    }

   /* const register = async (email, username, password) => {
        const response = await axios.post('/api/auth/register', {
            email,
            username,
            password,
        })*/


    const register = async (email, username, password,user_type,service_charge,nic,address,contact_no,currently_working_at,
                            years_of_experience  ) => {
        //alert(user_type)
        const response = await API.post('/reg', {
            'name': username,
            'email': email,
            'password':password,
            'nic':nic,
            'address':address,
            'contact_no':contact_no,
            'currently_working_at':currently_working_at,
            'years_of_experience':years_of_experience,
            'user_type':user_type,
            'service_charge':service_charge
        })

        const { accessToken, user } = response.data

        setSession(accessToken)

        dispatch({
            type: 'REGISTER',
            payload: {
                user,
            },
        })
    }

    const logout = () => {
        setSession(null)
        dispatch({ type: 'LOGOUT' })
    }

    useEffect(() => {
        ; (async () => {
            try {
                const accessToken = window.localStorage.getItem('accessToken')

                if (accessToken && isValidToken(accessToken)) {
                    setSession(accessToken)
                    const response = await axios.get('/api/auth/profile')
                    const { user } = response.data

                    dispatch({
                        type: 'INIT',
                        payload: {
                            isAuthenticated: true,
                            user,
                        },
                    })
                } else {
                    dispatch({
                        type: 'INIT',
                        payload: {
                            isAuthenticated: false,
                            user: null,
                        },
                    })
                }
            } catch (err) {
                console.error(err)
                dispatch({
                    type: 'INIT',
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    },
                })
            }
        })()
    }, [])

    if (!state.isInitialised) {
        return <MatxLoading />
    }

    return (
        <AuthContext.Provider
            value={{
                ...state,
                method: 'JWT',
                login,
                logout,
                register,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext

// import  React, { createContext, useEffect, useReducer } from 'react'
// import jwtDecode from 'jwt-decode'
// import axios from 'axios.js'
// import { MatxLoading } from 'app/components'
// import {navigations_ADMIN, navigations_AL, navigations_NP, navigations_PM, navigations_PT} from "../navigations";
// import API from '../services/baseURL'
// const initialState = {
//     isAuthenticated: false,
//     isInitialised: false,
//     user: null,
// }
//
// const isValidToken = (accessToken) => {
//     if (!accessToken) {
//         return false
//     }
//
//     const decodedToken = jwtDecode(accessToken)
//     const currentTime = Date.now() / 1000
//     return decodedToken.exp > currentTime
// }
//
// const setSession = (accessToken) => {
//     if (accessToken) {
//         localStorage.setItem('accessToken', accessToken)
//         axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
//     }
//     else {
//         localStorage.removeItem('accessToken')
//         delete axios.defaults.headers.common.Authorization
//     }
// }
//
// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'INIT': {
//             const { isAuthenticated, user } = action.payload
//
//             return {
//                 ...state,
//                 isAuthenticated,
//                 isInitialised: true,
//                 user,
//             }
//         }
//         case 'LOGIN': {
//             const { user } = action.payload
//             console.log("--------------------------------------------------")
//             console.log( user )
//             return {
//                 ...state,
//                 isAuthenticated: true,
//                 user,
//             }
//         }
//         case 'LOGOUT': {
//             return {
//                 ...state,
//                 isAuthenticated: false,
//                 user: null,
//             }
//         }
//         case 'REGISTER': {
//             const { user } = action.payload
//
//             return {
//                 ...state,
//                 isAuthenticated: true,
//                 user,
//             }
//         }
//         default: {
//             return { ...state }
//         }
//     }
// }
//
// const AuthContext = createContext({
//     ...initialState,
//     method: 'JWT',
//     login: () => Promise.resolve(),
//     logout: () => { },
//     register: () => Promise.resolve(),
// })
//
// export const AuthProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(reducer, initialState)
//
//
//     const login = async (email, password) => {
//         const response = await axios.post('/api/auth/login', {
//             email,
//             password,
//         })
//         console.log("came to login 33")
//         console.log(response.data)
//         const { accessToken, user } = response.data
//         console.log(user)
//
//         setSession(accessToken)
//
//         dispatch({
//             type: 'LOGIN',
//             payload: {
//                 user,
//             },
//         })
//     }
//
//    /* const register = async (email, username, password) => {
//         const response = await axios.post('/api/auth/register', {
//             email,
//             username,
//             password,
//         })*/
//     const register = async (email, username, password,user_type,service_charge) => {
//         //alert(user_type)
//         const response = await API.post('/reg', {
//             'name': username,
//             'email': email,
//             'password':password,
//             'user_type':user_type,
//             'service_charge':service_charge
//         })
//
//         const { accessToken, user } = response.data
//
//         setSession(accessToken)
//
//         dispatch({
//             type: 'REGISTER',
//             payload: {
//                 user,
//             },
//         })
//     }
//
//     const logout = () => {
//         setSession(null)
//         dispatch({ type: 'LOGOUT' })
//     }
//
//     useEffect(() => {
//         ; (async () => {
//             try {
//                 const accessToken = window.localStorage.getItem('accessToken')
//
//                 if (accessToken && isValidToken(accessToken)) {
//                     setSession(accessToken)
//                     const response = await axios.get('/api/auth/profile')
//                     const { user } = response.data
//
//                     dispatch({
//                         type: 'INIT',
//                         payload: {
//                             isAuthenticated: true,
//                             user,
//                         },
//                     })
//                 } else {
//                     dispatch({
//                         type: 'INIT',
//                         payload: {
//                             isAuthenticated: false,
//                             user: null,
//                         },
//                     })
//                 }
//             } catch (err) {
//                 console.error(err)
//                 dispatch({
//                     type: 'INIT',
//                     payload: {
//                         isAuthenticated: false,
//                         user: null,
//                     },
//                 })
//             }
//         })()
//     }, [])
//
//     if (!state.isInitialised) {
//         return <MatxLoading />
//     }
//
//     return (
//         <AuthContext.Provider
//             value={{
//                 ...state,
//                 method: 'JWT',
//                 login,
//                 logout,
//                 register,
//             }}
//         >
//             {children}
//         </AuthContext.Provider>
//     )
// }
//
// export default AuthContext
