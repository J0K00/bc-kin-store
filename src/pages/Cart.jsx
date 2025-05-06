import { useCart } from "../context/CartContext"
import { Trash2, Plus, Minus, Send } from "lucide-react"
import { Link } from "react-router-dom"
import { toast } from "react-hot-toast"

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart()

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId)
      toast.success("Produit retiré du panier")
    } else {
      updateQuantity(productId, newQuantity)
    }
  }

  const handleRemoveItem = (productId) => {
    removeFromCart(productId)
    toast.success("Produit retiré du panier")
  }

  const handleClearCart = () => {
    clearCart()
    toast.success("Panier vidé")
  }

  const handleWhatsAppOrder = () => {
    // Numéro WhatsApp de BK Beauty
    const phoneNumber = "+243829760815" // Remplacez par le vrai numéro WhatsApp

    // Créer le message avec les détails de la commande
    const orderDetails = cart.map(item => 
      `- ${item.name} (${item.quantity}x) : ${item.price}`
    ).join('\n')

    const message = `Bonjour, je souhaite passer la commande suivante :\n\n${orderDetails}\n\nTotal : ${getCartTotal().toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}`

    // Encoder le message pour l'URL
    const encodedMessage = encodeURIComponent(message)

    // Créer le lien WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    // Ouvrir WhatsApp dans un nouvel onglet
    window.open(whatsappUrl, '_blank')
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 bg-rose-50 min-h-screen">
        <h1 className="text-4xl font-bold mb-8 text-rose-500">Votre Panier</h1>
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">Votre panier est vide</p>
          <Link 
            to="/products" 
            className="inline-block bg-rose-500 text-white px-6 py-3 rounded-lg hover:bg-rose-600 transition-colors"
          >
            Continuer vos achats
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-rose-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-rose-500">Votre Panier</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Liste des produits */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="bg-white rounded-lg p-4 shadow-sm flex items-center gap-4">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-grow">
                <h3 className="font-semibold text-rose-500">{item.name}</h3>
                <p className="text-gray-600">{item.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  className="p-1 rounded-full hover:bg-rose-50"
                >
                  <Minus className="h-4 w-4 text-rose-500" />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  className="p-1 rounded-full hover:bg-rose-50"
                >
                  <Plus className="h-4 w-4 text-rose-500" />
                </button>
              </div>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="p-2 text-gray-400 hover:text-rose-500 transition-colors"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Résumé de la commande */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-rose-500 mb-4">Résumé de la commande</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>Sous-total</span>
                <span>{getCartTotal().toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span className="text-rose-500">{getCartTotal().toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</span>
                </div>
              </div>
              <button
                onClick={handleClearCart}
                className="w-full text-gray-600 hover:text-rose-500 transition-colors text-sm"
              >
                Vider le panier
              </button>
              <button 
                onClick={handleWhatsAppOrder}
                className="w-full bg-rose-500 text-white py-3 px-6 rounded-lg hover:bg-rose-600 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Commander via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart 