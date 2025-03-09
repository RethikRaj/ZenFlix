import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Login from "./components/Login";
import Error from "./components/Error";
import Browse from "./components/Browse";
import GptSearchPage from "./components/GptSearchPage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
        { index: true, element: <Login /> },
        { path: "browse", element : <Browse/>},
        { path: "gptSearch", element: <GptSearchPage/>}
    ],
    errorElement: <Error />,
  },
]);

export default AppRouter;