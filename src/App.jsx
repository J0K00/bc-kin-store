import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import { ToastProvider } from './context/ToastContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductDetail from './components/ProductDetail'
import CustomToast from './components/CustomToast'
import './index.css'

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <ToastProvider>
            <div className="flex flex-col min-h-screen bg-bc-white">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  {/* <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} /> */}
                </Routes>
              </main>
              <Footer />
              <CustomToast />
            </div>
          </ToastProvider>
        </CartProvider>
      </AuthProvider>
    </Router>
  )
}

export default App
