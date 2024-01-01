
import Cards from "./Components/homepage/Cards";
import Navbar from "./Components/navbar/Navbar";
import Home from "./Components/homepage/Home";
function App() {
   return (
      <>
      <div className="bg-[#f8f2e8] md:bg-[url('https://uploads-ssl.webflow.com/631f9b7b3a2f7a42f4ff5280/6320c6e2297b480e45fe9561_Grad-2.svg')] bg-no-repeat bg-right-top "> 
         <Navbar/>
         <Home/>
         
      </div>
      </>
   );
}

export default App;
