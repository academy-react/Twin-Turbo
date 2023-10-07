import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "../screens/Landing.jsx";
import ContactUs from "../screens/ContactUs.jsx";
import Page404 from "../screens/Page404.jsx";
import Forget from "../screens/Forget.jsx";
import Login from "../screens/Login.jsx";
// import SelectedBlog from "../screens/SelectedBlog.jsx";
import Blogs from "../screens/Blogs.jsx";
import SelectedCourses from "../screens/SelectedCourses.jsx";

const App = () => {
  const router = createBrowserRouter([
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
      path: "/courses",
      element: <SelectedCourses />,
    },
    {
      path: "*",
      element: <Page404 />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
