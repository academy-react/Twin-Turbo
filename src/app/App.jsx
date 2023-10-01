import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Landing from '../screens/Landing.jsx'
import Footer from '../components/Footer.jsx'
import Courses from '../components/Courses.jsx'

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
            path : '/footer',
            element : <Footer/>
        },

    ])
    
    return <RouterProvider router={router} />

}

export default App