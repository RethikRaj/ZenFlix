import { RouterProvider } from "react-router-dom"
import AppRouter from "./AppRouter"
import {Provider} from "react-redux";
import appStore from "./utils/appStore";

const App = ()=>{
  return <Provider store={appStore}>
    <RouterProvider router={AppRouter}/>
  </Provider>
}

export default App
