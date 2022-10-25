import { createBrowserRouter } from 'react-router-dom';
import Blog from '../../Components/Pages/Blog/Blog';
import Courses from '../../Components/Pages/Courses/Courses';
import Faq from '../../Components/Pages/Faq/Faq';
import Hero from '../../Components/Pages/Hero/Hero';
import Main from '../../Layout/Main';
import ErrorPage from '../../Others/ErrorPage';


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
                path: "/courses",
                element: <Courses></Courses>,
                errorElement: <ErrorPage></ErrorPage>

            },
            {
                path: "/faq",
                element: <Faq></Faq>,
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