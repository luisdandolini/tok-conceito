import './App.css'
import Benefits from './components/Benefits'
import Header from './components/Header'
import Home from './components/Home'
import Products from './components/Products'
import ReviewGoogle from './components/ReviewGoogle'

function App() {

  return (
    <>
      <Header />
      <main>
        <Home />
        <Benefits />
        <Products />
        <ReviewGoogle />
      </main>
    </>
  )
}

export default App
