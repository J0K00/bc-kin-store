import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useCart } from "../context/CartContext"
import { ShoppingCart, ArrowLeft } from "lucide-react"
import toast from "react-hot-toast"

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [imageError, setImageError] = useState(false)

  // Simuler le chargement des données du produit
  useEffect(() => {
    // Dans un cas réel, vous feriez un appel API ici
    const mockProducts = [
      {
        id: 1,
        name: "Sac à main élégant",
        category: "sacs",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=60",
        description: "Un sac à main élégant en cuir véritable",
        details: "Sac à main en cuir véritable avec finitions soignées. Dimensions: 30x20x10 cm. Compartiments multiples et bandoulière amovible.",
      },
      {
        id: 2,
        name: "Lunettes de soleil vintage",
        category: "lunettes",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&auto=format&fit=crop&q=60",
        description: "Lunettes de soleil style vintage",
        details: "Lunettes de soleil style vintage avec monture en métal et verres polarisés. Protection UV400.",
      },
      {
        id: 3,
        name: "Baskets tendance",
        category: "chaussures",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60",
        description: "Baskets confortables et stylées",
        details: "Baskets en cuir avec semelle en caoutchouc. Tige basse et lacets. Disponible en plusieurs tailles.",
      },
    ]

    const foundProduct = mockProducts.find(p => p.id === parseInt(id))
    if (foundProduct) {
      setProduct(foundProduct)
    } else {
      toast.error("Produit non trouvé")
      navigate("/products")
    }
  }, [id, navigate])

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity })
      toast.success(`${product.name} ajouté au panier`)
    }
  }

  const handleImageError = () => {
    setImageError(true)
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>Chargement...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-bc-orange mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image du produit */}
          <div className="bg-bc-white rounded-lg shadow-md overflow-hidden">
            {!imageError ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[400px] object-cover"
                onError={handleImageError}
              />
            ) : (
              <div className="w-full h-[400px] flex items-center justify-center bg-gray-100">
                <p className="text-gray-500">Image non disponible</p>
              </div>
            )}
          </div>

          {/* Détails du produit */}
          <div className="bg-bc-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-bold text-bc-orange mb-6">
              {product.price.toFixed(2)} €
            </p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Détails</h2>
              <p className="text-gray-600">{product.details}</p>
            </div>

            {/* Sélecteur de quantité */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantité
              </label>
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 border border-gray-300 rounded-l-md hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-1 border-t border-b border-gray-300">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 border border-gray-300 rounded-r-md hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Bouton d'ajout au panier */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-bc-orange text-bc-white py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail 