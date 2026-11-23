import Home from './pages/home';
import { Rituals } from './pages/rituals';
import { LookBooks } from './pages/looks';
import { OurRoots } from './pages/roots';
import { Stories } from './pages/stories';
import { Cart } from './pages/cart';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rituals" element={<Rituals />} />
          <Route path="/looks" element={<LookBooks />} />
          <Route path="/roots" element={<OurRoots />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </CartProvider>
  );
}

export default App;
