import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

const router = createBrowserRouter([
    {
        path : '/header',
        element : <Header />
    },
    {
        path : '/footer',
        element : <Footer />
    }
])

const App = () =>  {
 
    return (
        <RouterProvider router={router} />
    )

}

export default App