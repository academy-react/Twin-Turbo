import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Landing from '../screens/Landing.jsx'
import Courses from '../components/Courses.jsx'
import Page404 from '../screens/Page404.jsx';
import Forget from '../screens/Forget.jsx';

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
            path : '/forgetpassword',
            element : <Forget />
        },
        {
            path : '*',
            element : <Page404/>
        },
    ])

    return <RouterProvider router={router} />;
};

export default App;
