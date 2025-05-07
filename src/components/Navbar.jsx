import { Link } from "react-router-dom"
import { ShoppingCart, Menu, X } from "lucide-react"
import { useState } from "react"
import { useCart } from "../context/CartContext"
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartItems } = useCart()
  const { user, logout } = useAuth()

  const menuItems = [
    { name: "Accueil", path: "/" },
    { name: "Produits", path: "/products" },
    { name: "À propos", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-orange-600">BC KIN STORE</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-orange-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Bouton panier et menu mobile */}
          <div className="flex items-center">
            <Link to="/cart" className="relative p-2 text-gray-900">
              <ShoppingCart className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-orange-600 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* Bouton menu mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-4 sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-orange-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-orange-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 