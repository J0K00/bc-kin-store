import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Link } from "react-router-dom"
import { ShoppingCart } from "lucide-react"
import { useCart } from "../context/CartContext"
import { toast } from "react-hot-toast"

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault() // Empêche la navigation vers la page de détail
    addToCart(product)
    toast.success(`${product.name} ajouté au panier`)
  }

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <Card className="bg-white border-rose-200 hover:border-rose-300 transition-colors h-full">
          <div className="aspect-square overflow-hidden rounded-t-lg">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-rose-500">{product.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{product.price}</p>
          </CardContent>
        </Card>
      </Link>
      <button
        onClick={handleAddToCart}
        className="absolute bottom-4 right-4 bg-rose-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-rose-600"
        title="Ajouter au panier"
      >
        <ShoppingCart className="h-5 w-5" />
      </button>
    </div>
  )
}

export default ProductCard 