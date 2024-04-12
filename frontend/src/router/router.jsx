import {createBrowserRouter} from 'react-router-dom';
import LayoutPublic from '../layout/LayoutPublic.jsx';
import Landing from '../pages/Landing.jsx';
import Login from '../pages/Login.jsx';
import Home from '../pages/Home.jsx';
import Create from '../pages/Create.jsx';
import NewsDetails from '../pages/NewsDetails.jsx';
import Register from '../pages/Register.jsx';
import LayoutPrivate from '../layout/LayoutPrivate.jsx';


// const router = createBrowserRouter([
//    {
//       path: "/", 
//       element: <Landing/>,
//    },
//    {
//       path: "/login",
//       element: <Login/>,
//    },
//    {
//       path:"/register",
//       element: <Register/>,
//    },
//    {
//     element: <LayoutPublic/>,
//     children: [
//       {
//         path: "/home",
//         element: <Home/>,
//         loader: getNews
//      },
//      {
//         path:"/create",
//         element: <Create/>,
//       },
//      {
//         path: "/newsdetails/:id",
//         element: <NewsDetails/>,
//      },
//    ],
//  },
// ]);

// export default router;

// const router = createBrowserRouter([   OJOOOOOOOOOOOO
//    {
//      path: '/',
//      element: <LayoutPublic />,
//          children:[
//            {
//              index: true,
//              element:<Landing/>
//            },
//            {
//              path: "/login",
//              element: <Login/>,
//            },
//            {
//              path:"/register",
//              element: <Register/>,
//            },
//             {
//              path: "/home",
//              element: <LayoutPrivate />,
//              children: [
//                {
//                  index: true,
//                  element: <Home/>,
//                },
//                {
//                   path:"create",
//                   element: <Create/>,
//                 },
//                {
//                   path: "newsdetails/:id",
//                   element: <NewsDetails/>,
//                },
//              ]
//            }
//      ]}
// ]);
 
// export default router;

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPublic />,
    children:[
      {
        index: true,
        element: <Landing />
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      // {
      //   path: "/create",
      //   element: <Create />,
      // },
    ]
  },
  {
    path: '/home',
    element: <LayoutPrivate />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "create",
        element: <Create />,
      },
      {
        path: "newsdetails/:id",
        element: <NewsDetails />,
      },
    ]
  }
]);

export default router;
