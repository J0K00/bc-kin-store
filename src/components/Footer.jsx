import { Button } from "./ui/button"
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-white border-t border-rose-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* À propos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-rose-500">BK Beauty</h3>
            <p className="text-gray-600">
              Votre destination beauté pour des produits de qualité et des conseils experts en maquillage.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full text-gray-600 hover:text-rose-500"
                asChild
              >
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full text-gray-600 hover:text-rose-500"
                asChild
              >
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full text-gray-600 hover:text-rose-500"
                asChild
              >
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-rose-500 mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/">
                  <span className="text-gray-600 hover:text-rose-500">Accueil</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-rose-500">
                  Produits
                </Link>
              </li>
              <li>
                <Link to="/tutorials" className="text-gray-600 hover:text-rose-500">
                  Tutoriels
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-rose-500">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-rose-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-rose-500 mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-rose-500">
                  Consultation Beauté
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-rose-500">
                  Ateliers Maquillage
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-rose-500">
                  Soins Esthétiques
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-rose-500">
                  Livraison Express
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-rose-500 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600">
                <Mail className="h-5 w-5 text-rose-500" />
                bkbeauty@gmail.com
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Phone className="h-5 w-5 text-rose-500" />
                +243 829 941 808
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-5 w-5 text-rose-500" />
                Lemba Terminus, Kinshasa
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-rose-200">
          <p className="text-center text-gray-600">
            © 2025 BK Beauty. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 