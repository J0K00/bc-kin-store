import { useCart } from '../context/CartContext'
import { Button } from './ui/button'
import { X, Plus, Minus } from 'lucide-react'

const Cart = () => {
  const { cart, total, removeFromCart, updateQuantity } = useCart()

  if (cart.length === 0) {
    return (
      <div className="p-4 text-center">
        <p className="text-gray-600">Votre panier est vide</p>
      </div>
    )
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-rose-500">Votre Panier</h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.title} className="flex items-center justify-between p-4 bg-white rounded-lg border border-rose-200">
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-medium text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.price}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.title, item.quantity - 1)}
                  className="border-rose-200 hover:bg-rose-50"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.title, item.quantity + 1)}
                  className="border-rose-200 hover:bg-rose-50"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeFromCart(item.title)}
                className="text-rose-500 hover:text-rose-600"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-white rounded-lg border border-rose-200">
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium text-gray-800">Total</span>
          <span className="text-xl font-bold text-rose-500">{total.toFixed(2)} Fc</span>
        </div>
        <Button className="w-full mt-4 bg-rose-500 hover:bg-rose-600 text-white">
          Passer la commande
        </Button>
      </div>
    </div>
  )
}

export default Cart 