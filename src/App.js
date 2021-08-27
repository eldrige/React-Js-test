import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Route, useLocation, withRouter } from 'react-router-dom';

function App() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === '/checkout' ? null : <Navbar />}
      <Route path="/product" component={ProductScreen} exact />
      <Route path="/" component={HomeScreen} exact />
      <Route path="/checkout" component={CheckoutScreen} exact />
      {pathname === '/checkout' ? null : <Footer />}
    </>
  );
}

export default withRouter(App);
