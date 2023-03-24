import './App.css'
import Header from './HEADER/Header'
import Footer from './FOOTER/Footer'
import Home from './HOME/Home'
import TauntonWestSomerset from './ABOUT_US/taunton-west-somerset'
import TauntonWestSomerset1 from './OUR_EXPERIENCE/taunton-west-somerset1'
import TauntonWestSomerset2 from './HOME_CARE_SERVICES/taunton-west-somerset2'
import { HashRouter, Routes, Route } from "react-router-dom";
import Caring_Tech from './CARING_TECH/Caring_Tech'
import Getting_Started from './Getting_Started/Getting_Started'
import News_Event from './News_Event/News_Event'
function App() {

  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/taunton-west-somerset/*' element={<TauntonWestSomerset />} />
          <Route path='/taunton-west-somerset1/*' element={<TauntonWestSomerset1 />} />
          <Route path='/taunton-west-somerset2/*' element={<TauntonWestSomerset2 />} />
          <Route path='/caring-technology' element={<Caring_Tech />} />
          <Route path='/gettingstarted' element={<Getting_Started />} />
          <Route path='/newsevent' element={<News_Event />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )

}

export default App
