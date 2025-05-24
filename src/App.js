import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navs from './component/Navs/Navs';
import Home from './component/Home.js/Home';
import About from './component/About';
import Explore from './component/Explore';
import Review from './component/Review';
import Faq from './component/Faq';

function App() {
  return (
    <Router>
      <Navs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/review" element={<Review />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;
