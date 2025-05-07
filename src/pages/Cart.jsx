import { useState } from 'react'
import { useCart } from "../context/CartContext"
import { useAuth } from '../context/AuthContext'
import { useToast } from '../context/ToastContext'
import { Trash2, Plus, Minus } from "lucide-react"
import { Link } from "react-router-dom"

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
  } = useCart()
  const { user } = useAuth()
  const { showToast } = useToast()
  const [deliveryInfo, setDeliveryInfo] = useState({
    nom: user?.nom || '',
    adresse: '',
    ville: '',
    telephone: '',
    email: user?.email || ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setDeliveryInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Vérifier si tous les champs sont remplis
    const requiredFields = ['nom', 'adresse', 'ville', 'telephone', 'email']
    const missingFields = requiredFields.filter(field => !deliveryInfo[field])
    
    if (missingFields.length > 0) {
      showToast('Veuillez remplir tous les champs obligatoires', 'error')
      return
    }

    // Construire le message WhatsApp
    const message = `Nouvelle commande de ${deliveryInfo.nom}%0A%0A` +
      `Adresse de livraison:%0A` +
      `${deliveryInfo.adresse}%0A` +
      `${deliveryInfo.ville}%0A` +
      `Téléphone: ${deliveryInfo.telephone}%0A` +
      `Email: ${deliveryInfo.email}%0A%0A` +
      `Produits commandés:%0A` +
      cartItems.map(item => 
        `- ${item.name} (${item.quantity}x) - ${(item.price * item.quantity).toFixed(2)}€`
      ).join('%0A') + '%0A%0A' +
      `Frais de livraison: 5.00€%0A` +
      `Total: ${(getCartTotal() + 5).toFixed(2)}€`

    // Ouvrir WhatsApp avec le message
    window.open(`https://wa.me/243829760815?text=${message}`, '_blank')
    
    // Vider le panier
    clearCart()
    showToast('Commande envoyée avec succès !', 'success')
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Votre panier est vide</h1>
            <p className="text-gray-600 mb-8">
              Découvrez notre collection et trouvez les produits qui vous plaisent.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center bg-bc-orange text-bc-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Continuer mes achats
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Votre panier</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Liste des produits */}
          <div className="lg:col-span-2">
            <div className="bg-bc-white rounded-lg shadow-md overflow-hidden">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center p-6 border-b last:border-b-0"
                >
                  <div className="w-24 h-24 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="ml-6 flex-grow">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-md hover:bg-gray-100"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="mx-4">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-md hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center">
                        <span className="text-lg font-semibold text-bc-orange mr-4">
                          {(item.price * item.quantity).toFixed(2)} €
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-600"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formulaire de livraison et résumé */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Résumé de la commande */}
              <div className="bg-bc-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Résumé de la commande</h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Sous-total</span>
                    <span>{getCartTotal().toFixed(2)} €</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Livraison</span>
                    <span>5.00 €</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span className="text-bc-orange">{(getCartTotal() + 5).toFixed(2)} €</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulaire de livraison */}
              <div className="bg-bc-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Informations de livraison</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={deliveryInfo.nom}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="adresse" className="block text-sm font-medium text-gray-700">
                      Adresse *
                    </label>
                    <input
                      type="text"
                      id="adresse"
                      name="adresse"
                      value={deliveryInfo.adresse}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="ville" className="block text-sm font-medium text-gray-700">
                      Ville *
                    </label>
                    <input
                      type="text"
                      id="ville"
                      name="ville"
                      value={deliveryInfo.ville}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={deliveryInfo.telephone}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={deliveryInfo.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Commander via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage 