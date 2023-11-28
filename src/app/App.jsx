import { RouterProvider } from "react-router-dom"
import { Authorize , UnAuthorize } from './config/Router'

const App = () => {
  let token = localStorage.getItem("token")
  ondragstart = () => false
  
  return <RouterProvider router={token ? Authorize : UnAuthorize} />
};

export default App;