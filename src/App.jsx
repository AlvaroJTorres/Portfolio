import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Portfolio from "./components/Portfolio"
import SocialLinks from "./components/SocialLinks"
import TechnologyStack from "./components/TechnologyStack"

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Experience/>
      <Portfolio/>
      <TechnologyStack/>
      <Contact/> 

      <SocialLinks/>
    </div>
  )
}

export default App
