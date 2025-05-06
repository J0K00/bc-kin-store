import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "./ui/button"
import { Menu, X, ShoppingCart } from "lucide-react"
import { useCart } from "../context/CartContext"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { getCartItemsCount } = useCart()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/products", label: "Produits" },
    { path: "/tutorials", label: "Tutoriels" },
    { path: "/about", label: "À propos" },
    { path: "/contact", label: "Contact" },
  ]

  return (
    <nav className="bg-white border-b border-rose-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <span className="text-xl font-bold text-rose-500">BK Beauty</span>
            </Link>
          </div>

          {/* Menu mobile */}
          <div className="md:hidden">
            <div className="flex items-center space-x-4">
              <Link to="/cart" className="relative">
                <Button variant="ghost" size="icon" className="text-gray-600 hover:text-rose-500">
                  <ShoppingCart className="h-5 w-5" />
                  {getCartItemsCount() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {getCartItemsCount()}
                    </span>
                  )}
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-rose-500 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center">
            <div className="flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    isActive(link.path)
                      ? "text-rose-500"
                      : "text-gray-600 hover:text-rose-500"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="ml-10 flex items-center gap-4">
              <Link to="/cart" className="relative">
                <Button variant="ghost" size="icon" className="text-gray-600 hover:text-rose-500">
                  <ShoppingCart className="h-5 w-5" />
                  {getCartItemsCount() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {getCartItemsCount()}
                    </span>
                  )}
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-rose-500 text-white hover:bg-rose-600">Prendre RDV</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Menu mobile déroulant */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-wrap gap-2 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(link.path)
                    ? "text-rose-500"
                    : "text-gray-600 hover:text-rose-500"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button size="sm" className="bg-rose-500 text-white hover:bg-rose-600">
                RDV
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 