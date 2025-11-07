import Countries from "./components/Countries";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Duration from "./components/Duration";
import CTA from "./components/CTA";
const App=()=>{
  return (
    
    <>
    <Navbar/>
    <Hero />
    <Countries/>
    <CTA/>
    <Duration/>
    <Footer/>
    
    </>
  )
}
export default App;