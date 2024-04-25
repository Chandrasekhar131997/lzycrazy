import React from 'react';
import './App.css';
import { lazy, Suspense } from 'react'; // Import Suspense for lazy loading
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Navbar =lazy(()=>import("./Component/Dashboard/Navbar"));
const Home = lazy(() => import("./Component/Home"));
const Directbyfarm = lazy(() => import("./Component/SidebarComponent/Directbyfarm"));
const Selfmade = lazy(() => import("./Component/SidebarComponent/Selfmade"));
const Rentalitem = lazy(() => import("./Component/SidebarComponent/Rentalitem"));
const Realestate = lazy(() => import("./Component/SidebarComponent/Realestate"));
const Vehicle = lazy(() => import("./Component/SidebarComponent/Vehicle"));
const Mobiles = lazy(() => import("./Component/SidebarComponent/Mobiles"));
const Furniture = lazy(() => import("./Component/SidebarComponent/Furniture"));
const Fashion = lazy(() => import("./Component/SidebarComponent/Fashion"));
const Electronics = lazy(() => import("./Component/SidebarComponent/Electronics"));
const Commingsoon = lazy(() => import("./Component/SidebarComponent/Commingsoon"));

function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/directbyfarm" element={<Directbyfarm />} />
            <Route path="/selfmade" element={<Selfmade />} />
            <Route path="/rentalitem" element={<Rentalitem />} />
            <Route path="/realestate" element={<Realestate />} />
            <Route path="/vehicle" element={<Vehicle />} />
            <Route path="/mobiles" element={<Mobiles />} />
            <Route path="/furniture" element={<Furniture />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/commingsoon" element={<Commingsoon />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
    </>
  );
}

export default App;
