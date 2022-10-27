import { createBrowserRouter } from 'react-router-dom';
import Login from '../../Components/Pages/Authentication/Login/Login';
import Register from '../../Components/Pages/Authentication/Register/Register';
import Blog from '../../Components/Pages/Blog/Blog';
import CheckOut from '../../Components/Pages/Checkout/CheckOut';
import CourseDetails from '../../Components/Pages/CourseDetails/CourseDetails';
import Courses from '../../Components/Pages/Courses/Courses';
import CoursesRight from '../../Components/Pages/CoursesRight/CoursesRight';
import Faq from '../../Components/Pages/Faq/Faq';
import Hero from '../../Components/Pages/Hero/Hero';
import Main from '../../Layout/Main';
import ErrorPage from '../../Others/ErrorPage';
import PrivateRoute from '../Private/PrivateRoute';



const routers = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Hero></Hero>,
                errorElement: <ErrorPage></ErrorPage>

            },
            {
                path: "/login",
                element: <Login></Login>,
                errorElement: <ErrorPage></ErrorPage>

            },
            {
                path: "/register",
                element: <Register></Register>,
                errorElement: <ErrorPage></ErrorPage>

            },
            {
                path: "/courses",
                element: <Courses></Courses>,
                errorElement: <ErrorPage></ErrorPage>,
                children: [
                    {
                        path: "/courses",
                        loader: () => fetch("http://localhost:5000/courses"),
                        element: <CoursesRight></CoursesRight>,
                        errorElement: <ErrorPage></ErrorPage>,
                    },
                    {
                        path: "/courses/category/:id",
                        loader: ({ params }) => fetch(`http://localhost:5000/courses/category/${params.id}`),
                        element: <CoursesRight></CoursesRight>,
                        errorElement: <ErrorPage></ErrorPage>

                    },
                    {
                        path: "/courses/:id",
                        loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
                        element: <CourseDetails></CourseDetails>,
                        errorElement: <ErrorPage></ErrorPage>

                    },
                    {
                        path: "/courses/category/:c_id/:id",
                        loader: ({ params }) => {
                            const { c_id, id } = (params);
                            return fetch(`http://localhost:5000/courses/category/${c_id}/${id}`)
                        },
                        element: <CourseDetails></CourseDetails>,
                        errorElement: <ErrorPage></ErrorPage>

                    },
                ]

            },

            {
                path: "/faq",
                element: <Faq></Faq>,
                errorElement: <ErrorPage></ErrorPage>

            },
            {
                path: "/courses/:id/checkout",
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}/checkout`),
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                errorElement: <ErrorPage></ErrorPage>

            },
            {
                path: "/blog",
                element: <Blog></Blog>,
                errorElement: <ErrorPage></ErrorPage>

            },


        ]
    }
])

export default routers;