import { createBrowserRouter } from "react-router-dom";
import {Landing,ForgetPassword,Login,ContactUs,Blogs,SelectedBlog,Courses,SelectedCourse,Page404, Register , Panel ,ListOfCourse,Mycourse,EditProfile,DashBoard,ChangePassword} from '../../screens'

const Authorize = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/forgetPassword/:ConfigValue",
      element: <ForgetPassword />,
    },
    {    // when the forget page was optional the 404 page didn`t worked when we write anything in url
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
      path: "/blogs/:id",
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
      path: "/panel",
      element: <Panel /> ,
      
      children : [
        {
          path : "/panel/ListOfCourse",
          element : <ListOfCourse/>,
        },
        {
          path : "/panel/editprofile",
          element : <EditProfile/>,
        },
        {
          path : "/panel",
          element : <DashBoard/>,
        },
        {
          path : "/panel/userpanel",
          element : <DashBoard/>,
        },
        {
          path : "/panel/reserveCourse",
          element : <Mycourse/>,
        },
        {
          path : "/panel/favoriteCourse",
          element : <Mycourse/>,
        },
        {
          path : "/panel/changePassword",
          element : <ChangePassword/>,
        },
      ]
    },
    {
      path: "*",
      element: <Page404 />,
    },

]);

const UnAuthorize = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/forgetPassword/:ConfigValue",
    element: <ForgetPassword />,
  },
  {    // when the forget page was optional the 404 page didn`t worked when we write anything in url
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
    path: "/blogs/:id",
    element: <SelectedBlog />,
    errorElement : <Page404 />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/courses/:id",
    element: <SelectedCourse />,
    errorElement : <Page404 />,
  },
  {
    path: "*",
    element: <Page404 />,
  },

]);

export { Authorize , UnAuthorize }