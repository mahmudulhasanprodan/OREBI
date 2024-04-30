import React from "react"
import Home from "./Pages/Home/Home"
import RouteLayout from "./CommonComponent/RouteLayout/RouteLayout";
import Shop from "./Pages/Shop/Shop";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<RouteLayout />}>
          <Route index element={<Home />}></Route>        
          <Route path="/Shop" element={<Shop />}></Route>        
      </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  )
}

export default App
