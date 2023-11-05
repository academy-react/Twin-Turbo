import { RouterProvider } from "react-router-dom"
import Router from './config/Router'

const App = () => {
  ondragstart = () => false
  return <RouterProvider router={Router} />
};

export default App;