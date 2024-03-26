import {createBrowserRouter} from 'react-router-dom';
import LoginPage from '../pages/LoginPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
  }]);
export default router;