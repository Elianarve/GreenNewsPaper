import React from 'react'
import { Outlet } from "react-router-dom";
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';


const LayoutPublic = () => {
return (
    <div style={{ minHeight:"100%",position:"relative",display: 'flex', flexDirection: 'column' }}>
        <Nav/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
    </div>
 );
}

export default LayoutPublic;