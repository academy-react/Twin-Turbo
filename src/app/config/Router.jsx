import { createBrowserRouter } from "react-router-dom";
import {Landing,Forget,Login,ContactUs,Blogs,SelectedBlog,Courses,SelectedCourses,Page404} from '../../screens'

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/forget",
      element: <Forget />,
    },
    {
      path: "/login",
      element: <Login />,
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
      element: <SelectedCourses />,
    },
    {
      path: "*",
      element: <Page404 />,
    },
]);

export default Router