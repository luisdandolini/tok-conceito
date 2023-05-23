import './App.css'
import Benefits from './components/Benefits'
import Header from './components/Header'
import Home from './components/Home'
import Products from './components/Products'

function App() {

  return (
    <>
      <Header />
      <main>
        <Home />
        <Benefits />
        <Products />
      </main>
    </>
  )
}

export default App
