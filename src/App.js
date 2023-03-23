import './App.css'
import Header from './HEADER/Header'
import Footer from './FOOTER/Footer'
import Home from './HOME/Home'
import TauntonWestSomerset from './ABOUT_US/taunton-west-somerset'
import TauntonWestSomerset1 from './OUR_EXPERIENCE/taunton-west-somerset1'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Caring_Tech from './CARING_TECH/Caring_Tech'
import Getting_Started from './Getting_Started/Getting_Started'

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/taunton-west-somerset/*' element={<TauntonWestSomerset />} />
          <Route path='/taunton-west-somerset1/*' element={<TauntonWestSomerset1 />} />
          <Route path='/caring-technology' element={<Caring_Tech />} />
          <Route path='gettingstarted' element={<Getting_Started/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
