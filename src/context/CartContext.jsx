import { createContext, useContext, useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import CustomToast from '../components/CustomToast'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  // Charger le panier depuis le localStorage au démarrage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
  }, [])

  // Sauvegarder le panier dans le localStorage à chaque modification
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  const showCustomToast = (message) => {
    // Dismiss any existing toasts
    toast.dismiss()
    
    // Show new toast
    toast.custom(
      (t) => (
        <CustomToast
          message={message}
          onClose={() => {
            toast.dismiss(t.id)
          }}
        />
      ),
      {
        duration: 3000,
        position: 'top-right',
      }
    )
  }

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        )
      }
      return [...prevItems, { ...product, quantity: product.quantity || 1 }]
    })
    showCustomToast('Produit ajouté au panier')
  }

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId))
    showCustomToast('Produit retiré du panier')
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setCartItems([])
    showCustomToast('Panier vidé')
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity)
    }, 0)
  }

  const getCartItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartItemsCount
    }}>
      {children}
    </CartContext.Provider>
  )
} 