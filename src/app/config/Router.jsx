import { createBrowserRouter } from "react-router-dom";
import {Landing,ForgetPassword,Login,ContactUs,Blogs,SelectedBlog,Courses,SelectedCourse,Page404, Register , Panel ,ListOfCourse} from '../../screens'

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/forgetPassword",
      element: <ForgetPassword />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/contact-us",
      element: <ContactUs />,
    },
    {
      path: "/blogs",
      element: <Blogs />,
    },
    {
      path: "/:blogs/:id",
      element: <SelectedBlog />,
    },
    {
      path: "/courses",
      element: <Courses />,
    },
    {
      path: "/courses/:id",
      element: <SelectedCourse />,
    },
    {
      path: "/courses/:id",
      element: <SelectedCourse />,
    },
    {
      path: "/panel",
      element: <Panel />,
      children : [
        {
          path : "/panel/ListOfCourse",
          element : <ListOfCourse/>,
        }
      ]
    },
    {
      path: "*",
      element: <Page404 />,
    },

]);

export default Router