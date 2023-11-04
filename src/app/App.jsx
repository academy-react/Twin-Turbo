import { RouterProvider } from "react-router-dom";
import router from './config/Router'
import NightMode from "../components/common/NightMode";

const App = () => {
  NightMode("","")
  return <RouterProvider router={router} />;
};

export default App;
