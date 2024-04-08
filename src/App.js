// import Logos from './pages/logos/Logos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PageLoader from './components/pageLoader';
import { Suspense } from 'react';
import React from 'react';
import Navbar from "./layout/navbar"
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';

// Lazy routing 
const HomePage = React.lazy(() => import("./pages/dashboard"))
const ContactPage = React.lazy(() => import("./pages/contactUs"))
const AboutPage = React.lazy(() => import("./pages/aboutUs"))
const ServicePage = React.lazy(() => import("./pages/services"))
const Bookkeeping = React.lazy(() => import("./pages/Bookkeeping"))
const TaxReturn2 = React.lazy(() => import("./pages/BusinessActivityStatement"))
const TaxReturn3 = React.lazy(() => import("./pages/IncomeTaxandTaxReturnsService"))
const TaxReturn4 = React.lazy(() => import("./pages/BusinessPlanningAdvisory"))
const SuperAnnuation = React.lazy(() => import("./pages/SuperAnnuation"))
const BusinessStructure =React.lazy(() => import("./pages/BusinessStructure"))
const TermsAndCondtion = React.lazy(() => import("./pages/TermsAndCondition"))
const PrivacyAndPolicy = React.lazy(() => import("./pages/PrivacyPolicy"))
const ErrorPage = React.lazy(() => import("./pages/404Page"))
function App() {
  return (
    <>
      <BrowserRouter>
      <Suspense fallback = <PageLoader/> >
      <Navbar/>
        <Routes>
          {/* <Route element={<Logos />} path="/logos"></Route> */}
          <Route element={<HomePage />} path="/"></Route>
          <Route element={<ContactPage />} path="/contact-us"></Route>
          <Route element={<AboutPage />} path="/about-us"></Route>
          <Route element={<ServicePage/>}  path="/services"/>
          <Route element={<Bookkeeping/>}  path="/bookkeeping"/>
          <Route element={<TaxReturn2/>}  path="/business-activity-statement"/>
          <Route element={<TaxReturn3/>}  path="/income-tax-and-tax-returns-service"/>
          <Route element={<TaxReturn4/>}  path="/business-planning-advisory-formation-services"/>
          <Route element={<SuperAnnuation/>}  path="/superannuation"/>
       
          <Route element={<TermsAndCondtion/>} path="/term-and-condition"/>
          <Route element={<PrivacyAndPolicy/>} path="/privacy-policy"/>
          <Route element={<BusinessStructure/>} path="/Business-Structures-New-Business-Setup-Services"/>
          <Route element={<ErrorPage/>} path="*"/>
        </Routes>
        </Suspense>
        <ToastContainer />
      </BrowserRouter>
      {/* <Logos /> */}
    </>
  );
}

export default App;
