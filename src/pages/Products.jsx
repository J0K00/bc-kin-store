import { useState, useEffect } from "react"
import { useSearchParams, Link } from "react-router-dom"
import { ShoppingCart } from "lucide-react"
import { useCart } from "../context/CartContext"
import toast from "react-hot-toast"

const Products = () => {
  const [searchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "all"
  )
  const { addToCart } = useCart()

  // Simuler des données de produits
  useEffect(() => {
    const mockProducts = [
      {
        id: 1,
        name: "Sac à main élégant",
        category: "sacs",
        price: 89.99,
        image: "/images/bag1.jpg",
        description: "Un sac à main élégant en cuir véritable",
      },
      {
        id: 2,
        name: "Lunettes de soleil vintage",
        category: "lunettes",
        price: 129.99,
        image: "/images/glasses1.jpg",
        description: "Lunettes de soleil style vintage",
      },
      {
        id: 3,
        name: "Baskets tendance",
        category: "chaussures",
        price: 149.99,
        image: "/images/shoes1.jpg",
        description: "Baskets confortables et stylées",
      },
      {
        id: 4,
        name: "Sac bandoulière",
        category: "sacs",
        price: 79.99,
        image: "/images/bag2.jpg",
        description: "Sac bandoulière pratique et élégant",
      },
      {
        id: 5,
        name: "Lunettes de vue design",
        category: "lunettes",
        price: 159.99,
        image: "/images/glasses2.jpg",
        description: "Lunettes de vue avec un design moderne",
      },
      {
        id: 6,
        name: "Escarpins classiques",
        category: "chaussures",
        price: 119.99,
        image: "/images/shoes2.jpg",
        description: "Escarpins élégants pour toutes occasions",
      },
    ]
    setProducts(mockProducts)
  }, [])

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory)

  const categories = [
    { id: "all", name: "Tous les produits" },
    { id: "sacs", name: "Sacs" },
    { id: "lunettes", name: "Lunettes" },
    { id: "chaussures", name: "Chaussures" },
  ]

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Nos Produits</h1>

        {/* Filtres de catégorie */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-md transition-colors ${
                selectedCategory === category.id
                  ? "bg-bc-orange text-bc-white"
                  : "bg-bc-white text-bc-black hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grille de produits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-bc-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link to={`/product/${product.id}`}>
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              <div className="p-6">
                <Link
                  to={`/product/${product.id}`}
                  className="block hover:text-bc-orange transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                </Link>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-bc-orange">
                    {product.price.toFixed(2)} €
                  </span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-bc-orange text-bc-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors flex items-center"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">Aucun produit trouvé dans cette catégorie.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products 