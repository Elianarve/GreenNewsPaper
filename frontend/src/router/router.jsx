import { createBrowserRouter } from 'react-router-dom';
import LayoutPublic from '../layout/LayoutPublic.jsx';
import Landing from '../pages/Landing.jsx';
import Login from '../pages/Login.jsx';
import Home from '../pages/Home.jsx';
import Create from '../pages/Create.jsx';
import NewsDetails from '../pages/NewsDetails.jsx';
import Register from '../pages/Register.jsx';
import { Update } from '../pages/update.jsx';
import { getNews } from '../services/newsServices.js';

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
    path: "/register",
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
        path: "/create",
        element: <Create/>,
      },
      {
        path: "/update", // Ruta para el componente Update
        element: <Update/>,
      },
      {
        path: "/newsdetails/:id",
        element: <NewsDetails/>,
      },
    ],
  },
]);

export default router;
