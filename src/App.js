import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Route path="/product" component={ProductScreen} exact />
      <Route path="/checkout" component={CheckoutScreen} exact />
      <Route path="/" component={HomeScreen} exact />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
