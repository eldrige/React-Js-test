import HomeScreen from './screens/HomeScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductScreen from './screens/ProductScreen';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/product" component={ProductScreen} exact />
      <Route path="/" component={HomeScreen} exact />
      <Footer />
    </Router>
  );
}

export default App;
