import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';

const LayoutPrivate = () => {  
  const { userAuth } = useUserContext();

  return (
    <>
      {userAuth ? (
        <>
          <Nav />
          <main>
            <Outlet />
          </main>
          <Footer />
        </>
      ) : ( 
        <Navigate to="/" />
      )}
    </>
  );
};

export default LayoutPrivate;

