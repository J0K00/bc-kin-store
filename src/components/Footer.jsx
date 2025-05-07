import { Link } from "react-router-dom"
import { Facebook, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-bc-black text-bc-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-bc-orange mb-4">BC KIN STORE</h2>
            <p className="text-gray-300 mb-4">
              Votre destination de mode pour des sacs, lunettes et chaussures tendance.
              Découvrez notre collection exclusive aux couleurs orange, blanc et noir.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-bc-orange transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-bc-orange transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-bc-orange transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-bc-orange transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-bc-orange transition-colors">
                  Produits
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-bc-orange transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-bc-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: contact@bckinstore.com</li>
              <li>Tél: +33 1 23 45 67 89</li>
              <li>Adresse: 123 Rue de la Mode, Paris</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} BC KIN STORE. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 