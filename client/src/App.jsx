import "./App.css";
import Footer from "./components/Footer";
// import logo from '../src/assets/Logo/logo.png'
import Header from "./components/Header";
import DealBanner from "./components/Home/DealBanner";
import DealsOfTheMonth from "./components/Home/DealsOfTheMonth";
import Emboidered from "./components/Home/Emboidered";
import Hero from "./components/Home/Hero";
import Instagram from "./components/Home/Instagram";
import Newarrivals from "./components/Home/Newarrivals";
import Partners from "./components/Home/Partners";
import Viewmore from "./components/Home/Viewmore";




function App() {
  return (
    <>
      <Header />
      <Hero />
      <DealsOfTheMonth />
      <DealBanner />
      <Instagram />
      <Emboidered/>
     <Newarrivals/>
     {/* <Viewmore/> */}
     <Partners />
     <Footer />

    


    </>
  );
}

export default App;
