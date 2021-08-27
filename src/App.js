import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const path = window.location.href;
  let checkout = 'http://localhost:3000/checkout';

  return (
    <Router>
      {path === checkout ? null : <Navbar />}
      <Route path="/product" component={ProductScreen} exact />
      <Route path="/" component={HomeScreen} exact />
      <Route path="/checkout" component={CheckoutScreen} exact />
      {path === checkout ? null : <Footer />}
    </Router>
  );
}

export default App;
