import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Articles from './Pages/Articles';
// import FAQ from './Pages/FAQ';
// import Contact from './Pages/Contact';
import PadSelector from './Pages/PadSelector';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        {/* <Route path="/faq" element={<FAQ />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/pad-selector" element={<PadSelector />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
