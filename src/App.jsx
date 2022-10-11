import Intro from "./components/intro/intro";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import ProductList from "./components/productList/productList";

const App = () => {
  return (
  <div>
    <Intro/>
    <About/>
    <ProductList/>
    <Contact/>
  </div>
  )
};

export default App;