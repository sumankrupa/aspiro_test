import "./App.css";
import Book from "./Book";

import Header from "./Header";
import Hero from "./Hero";
import Sub from "./Sub";
import Last from './Last'
import Services from "./Services";
import Trips from "./Trips";


function App() {
  return (
    <div className="App">
      <img src="/images/inj.png" className="cloud" alt="" />
      <img src="/images/Group4.png" className="dot1" alt="" />
      
      <div className="frame">
        {/* header */}
        <Header />

        {/* hero  section*/}
        <Hero />

        {/* services section */}
        <Services></Services>
        {/* destination */}
        <Trips></Trips>
        {/* Book a trip */}
        <Book></Book>

        {/* subscription section */}
        <Sub/>
      
        {/* footer */}
     <Last/>   
      </div>
    </div>
  );
}
export default App;
