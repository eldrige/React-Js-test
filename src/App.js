import Hero from './screens/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" component={Hero} exact />
      <Footer />
    </Router>
  );
}

export default App;
