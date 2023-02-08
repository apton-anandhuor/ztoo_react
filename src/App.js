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
// import MailchimpFormContainer from "./components/MailchimpContainer";

ReactGA.initialize("G-K7YJ0JRMXN")
ReactGA.send({ hitType: "pageview", page: "/" });

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Welcome />
      <Gallery />
      <Client />
      <Team />
      <CTA />
      {/* <MailchimpFormContainer /> */}
      <Contact />
      <Footer />
    </div >
  );
}

export default App;
