import {   Route, Routes } from 'react-router-dom';
import { Navbar } from './Component/Navbar';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Home } from './pages/home/Home';
import { Footer } from './Component/Organization/Footer';
import { Organization } from './Component/Organization/Organization';
import { OurWorkForce } from './pages/about/OurWorkForce';
import { About } from './pages/about/About';
import { OurVision } from './pages/about/OurVision';
import { AboutOurMission } from './pages/about/AboutOurMission';
import { AboutService } from './pages/about/AboutService';


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
    <Route path="/about" Component={About} />
    <Route path="/ourVision" Component={OurVision} />
    <Route path="/ourMission" Component={AboutOurMission} />
    <Route path="/OurService" Component={AboutService} />
    <Route path="/organization" Component={Organization} />

    </Routes>
    <Footer/>
  </HelmetProvider>
  );
}





