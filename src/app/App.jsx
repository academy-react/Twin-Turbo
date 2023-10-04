import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Landing from '../screens/Landing.jsx'
import Courses from '../components/Courses.jsx'
import ContactUs from '../screens/ContactUs.jsx'
import Page404 from '../screens/Page404.jsx'
import Forget from '../screens/Forget.jsx'
import Login from '../screens/Login.jsx'

const App = () => {

    const router = createBrowserRouter([
        {
            path : '/',
            element : <Landing />
        },
        {
            path : '/header',
            element : <Courses/>
        },
        {
            path : '/forget',
            element : <Forget />
        },
        {
            path : '/login',
            element : <Login />
        },
        {
            path : '/contact-us',
            element : <ContactUs />
        },
        {
            path : '*',
            element : <Page404/>
        },
    ])

    return <RouterProvider router={router} />;
};

export default App;
