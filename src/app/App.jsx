import { RouterProvider } from "react-router-dom"
import { Authorize , UnAuthorize } from './config/Router'
import { useSelector } from "react-redux";

const App = () => {
  let reduxToken = useSelector(state => state.user.token)
  let token = localStorage.getItem("token")
  ondragstart = () => false
  

  if(token || reduxToken !== "") return <RouterProvider router={Authorize} />
  else return <RouterProvider router={UnAuthorize} />
};

export default App;