import Body from "./components/Body";
import Head from "./components/Head";
import "./App.css";

import { Provider } from "react-redux";
import store from "./utils/store";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";

import Maincomponent from "./components/Maincomponent";
import WatchPage from "./components/WatchPage";

const appRouter=  createBrowserRouter([{
  path:"/",
  element: <Body />,
  children: [
     {
      path:"/",
      element: <Maincomponent />,
     },
     {
      path:"watch",
      element: <WatchPage />,

     },

  ],
}]);

function App() {
  return (
    <Provider store= {store}>
    <div>
   <Head theme={"light"} />
   <RouterProvider router={appRouter} />
   </div>
   </Provider>
    

  );
}

export default App;
