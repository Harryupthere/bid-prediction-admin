import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import "./App.css";

import Dashboard from "./components/Dashboard";

// import Home from "./components/dashboard/Home";
// import Rate from "./components/dashboard/Rate";
import Home1 from "./components/Home";
import Rate1 from "./components/Rate";
import Login from "./components/Login";
import bg1 from './image/image/bg05.png';
import bg2 from './image/image/bg04.png';
import bg3 from './image/image/bg3.png';
import config from "./config";



function App() {
  return (
    <Router>    <div className="relative w-full imgIndex -z-50 ">
    <div className="absolute  top-0  left-0">
         <img src={bg1}  alt="bg01"/>
    </div>
    <div className="absolute  top-0 left-0  md:block hidden">
         <img  src={bg2} alt="bg02"/>
    </div>
    <div className="absolute  sm:top-0 top-80 right-0 sm:w-96  w-40">
         <img  src={bg3} alt="bg02"/>
    </div>
  </div>

    
      <Routes>
    {/*  <Route path={config.baseUrl} element={<Login />} />
         <Route path={config.baseUrl`dashboard`} element={<Dashboard />}>
          <Route path={config.baseUrl`dashboard/home`} element={<Home />} />
          <Route path={config.baseUrl`dashboard/rate`} element={<Rate />} /> */}
          <Route path="/admin/" element={<Login />} />
          <Route path={`/admin/Dashboard`} element={<Dashboard />} />
          <Route path="/admin/home" element={<Home1 />} />
          <Route path="/admin/rate" element={<Rate1 />} />

        {/* <Route path={`/admin/Dashboard`} element={<Dashboard />} >
          <Route path={`home`} element={<Home />} />
          <Route path={`rate`} element={<Rate />} />
          </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
