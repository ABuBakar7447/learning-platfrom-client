import { createBrowserRouter, Link } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CoursePage from "../../Pages/Coursepage/CoursePage";
import Home from "../../Pages/Homepage/Home";
import Login from "../../Pages/Login/Login";
import Premium from "../../Pages/Premium/Premium";
import Register from "../../Pages/Register/Register";
import Privateroute from "../Privateroute/Privateroute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                loader: () =>{
                    return fetch('https://course-hub-server-alpha.vercel.app/course-data')
                  },
                element: <Home></Home>
            },
            {
                path: '/course/:id',
                loader:({params}) => fetch(`https://course-hub-server-alpha.vercel.app/course/${params.id}`),
                element:<CoursePage></CoursePage>
            },
            {
                path: '/premium/:course_id',
                loader:({params}) => fetch(`https://course-hub-server-alpha.vercel.app/premium/${params.course_id}`),
                element:<Privateroute><Premium></Premium></Privateroute>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'*',
                element: <div>This is not correct page You are seaching for please go back to <Link to='/'>Main Page</Link> </div>
            }

        ]
    }
])