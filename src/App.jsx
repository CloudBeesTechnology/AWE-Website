import {   Route, Routes } from 'react-router-dom';
import { Navbar } from './Component/Navbar';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Home } from './pages/home/Home';
import { Footer } from './Component/Organization/Footer';
import { Organization } from './Component/Organization/Organization';
import { OurWorkForce } from './pages/about/OurWorkForce';


export const App=()=> {
  return (
    
    <HelmetProvider>
    <Helmet>
      <link rel="canonical" href={window.location.href} />
    </Helmet>
    <Navbar />
    <Routes>
    <Route path="/" Component={Home} />
    <Route path="/ourWorkForce" Component={OurWorkForce} />
    <Route path="/organization" Component={Organization} />

    </Routes>
    <Footer/>
  </HelmetProvider>
  );
}





