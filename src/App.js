import Client from "./components/Client";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import Welcome from "./components/Welcome";
import './assets/css/style.css'
import './assets/css/owl.transitions.css'
import Gallery from "./components/Gallery";
import ReactGA from "react-ga4"

ReactGA.initialize("G-K7YJ0JRMXN")
ReactGA.send({ hitType: "pageview", page: "/" });

function App() {
  return (
    
    <div className="container">
      <div class="row gx-5">
        <div class="col-lg-5 " style={{width:'100%',height:'100px',background:'blue'}}></div>
        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-7  " style={{width:'100%',height:'100px',background:'black'}}></div>
        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 " style={{width:'100%',height:'100px',background:'red'}}></div>
        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2  " style={{width:'100%',height:'100px',background:'green'}}></div>
        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2  " style={{width:'100%',height:'100px',background:'yellow'}}></div>
        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 " style={{width:'100%',height:'100px',background:'blue'}}></div>
        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2  " style={{width:'100%',height:'100px',background:'black'}}></div>
        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2  " style={{width:'100%',height:'100px',background:'red'}}></div>
        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2  " style={{width:'100%',height:'100px',background:'green'}}></div>
        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2  " style={{width:'100%',height:'100px',background:'yellow'}}></div>
        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 " style={{width:'100%',height:'100px',background:'blue'}}></div>
        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2  " style={{width:'100%',height:'100px',background:'black'}}></div>
      </div>
      {/* <Navbar />
      <Home />
      <Welcome />
      <Gallery />
      <Client />
      <Team />
      <CTA />
      <Contact />
      <Footer /> */}
    </div >
  );
}

export default App;
