import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import About from './About/About'
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import Start from "./Start/Start";





function App(){
  const routes=createHashRouter([{
    path:'',element:<Layout/>,children:[
      {index:true,element:<Start/>},
      {path:'/start',element:<Start/>},
      {path:'/about',element:<About/>},
      {path:'/portfolio',element:<Portfolio/>},
      {path:'/contact',element:<Contact/>},
      {path:'/*',element:<h2 className="bg-danger justify-content-center  align-items-center  d-flex">Page Not Found</h2>}
    ]
  }])
  return <>
  <RouterProvider router={routes}></RouterProvider>
  </>
}

export default App;
