import './App.css'
import Header from "./components/header/Header"
import Home from  "./pages/home/Home"
import Cart from "./pages/cart/Cart"
import About from "./pages/about/About"
import Complete from "./pages/complete/Complete"
import Pricing from "./pages/pricing/Pricing"
import Input from "./pages/input/Input"
import Footer from './components/footer/Footer'


function App() {

  return (
    <div className='App'>
      <Header />
      <Home />
      <Cart />
      <About />
      <Complete />
      <Pricing />
      <Input />
      <Footer />  
    </div>
  )
}

export default App
