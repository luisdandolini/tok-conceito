import './App.css'
import Benefits from './components/Benefits'
import Products from './components/Products'
import ReviewGoogle from './components/ReviewGoogle'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsApp from './components/WhatsApp'
import HomeNew from './components/HomeNew'

function App() {

  return (
    <>
      <HomeNew />
      <main>
        <Benefits />
        <Products />
        <ReviewGoogle />
        <About />
        <Contact />
        <WhatsApp />
      </main>
      <Footer />
    </>
  )
}

export default App
