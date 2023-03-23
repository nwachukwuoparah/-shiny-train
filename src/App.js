import './App.css'
import Header from './HEADER/Header'
import Footer from './FOOTER/Footer'
import Home from './HOME/Home'
import TauntonWestSomerset from './ABOUT_US/taunton-west-somerset'
import TauntonWestSomerset1 from './OUR_EXPERIENCE/taunton-west-somerset1'
import TauntonWestSomerset2 from './HOME_CARE_SERVICES/taunton-west-somerset2'
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/taunton-west-somerset/*' element={<TauntonWestSomerset />} />
          <Route path='/taunton-west-somerset1/*' element={<TauntonWestSomerset1 />} />
          <Route path='/taunton-west-somerset2/*' element={<TauntonWestSomerset2 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
