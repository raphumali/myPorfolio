import Intro from "./components/intro/intro";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import ProductList from "./components/productList/productList";
import DarkMode from "./components/darkMode/darkMode";
import { useContext } from "react";
import { ThemeContext } from "./context";

const App = () => {
const theme = useContext(ThemeContext);
const darkMode = theme.state.darkMode;

  return (
  <div style={{backgroundColor:darkMode ? "#222" : "white", color: darkMode && "white"}}>
    <DarkMode/>
    <Intro/>
    <About/>
    <ProductList/>
    <Contact/>
  </div>
  )
};

export default App;