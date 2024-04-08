import {createBrowserRouter} from 'react-router-dom';
import LayoutPublic from '../layout/LayoutPublic.jsx';
import Landing from '../pages/Landing.jsx';
import Login from '../pages/Login.jsx';
import Home from '../pages/Home.jsx';
import Create from '../pages/Create.jsx';
import NewsDetails from '../pages/NewsDetails.jsx';
import Register from '../pages/Register.jsx';



const router = createBrowserRouter([
    {
        path: "/", 
        element: <Landing/>,
     },
     {
        path: "/login",
        element: <Login/>,
     },
     {
        path:"/register",
        element: <Register/>,
     },
  {
    path: "/",
    element: <LayoutPublic/>,
    children: [
     {
        path: "/home",
        element: <Home/>,
     },
     {
        path:"/create",
        element: <Create/>,
      },
     {
        path: "/newsdetails/:id",
        element: <NewsDetails/>,
     },
   ],
 },
]);

export default router;import {createBrowserRouter} from 'react-router-dom';
import LayoutPublic from '../layout/LayoutPublic.jsx';
import Landing from '../pages/Landing.jsx';
import Login from '../pages/Login.jsx';
import Home from '../pages/Home.jsx';
import Create from '../pages/Create.jsx';
import NewsDetails from '../pages/NewsDetails.jsx';
import Register from '../pages/Register.jsx';
import {getNews} from '../services/newsServices.js';
import { update } from '../pages/update.jsx';


const router = createBrowserRouter([
   {
      path: "/", 
      element: <Landing/>,
   },
   {
      path: "/login",
      element: <Login/>,
   },
   {
      path:"/register",
      element: <Register/>,
   },
   {
    element: <LayoutPublic/>,
    children: [
      {
        path: "/home",
        element: <Home/>,
        loader: getNews
     },
     {
        path:"/create",
        element: <Create/>,
      },
      {
         path:"/update",
         element: <update/>,
       },
     {
        path: "/newsdetails/:id",
        element: <NewsDetails/>,
     },
   ],
 },
]);

export default router;