import { RouterProvider } from "react-router-dom"
import AppRouter from "./AppRouter"
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import AuthListener from "./components/AuthListener";

const App = ()=>{
  return <Provider store={appStore}>
    <AuthListener/>
    <RouterProvider router={AppRouter}/>
  </Provider>
}

export default App
