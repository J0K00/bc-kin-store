import { useParams } from "react-router-dom"
import { Card, CardContent } from "./ui/card"
import { ArrowLeft, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { toast } from "react-hot-toast"
import { useState } from "react"

const ProductDetail = () => {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // Simulons des données de produits (à remplacer par vos vraies données)
  const products = [
    {
      id: 1,
      name: "Maquillage de Cérémonie",
      price: "40,000 Fc",
      image: "/images/ceremonie.jpg",
      description: "Maquillage idéal pour les cérémonies telles que les soirées dansantes, les fêtes d'anniversaires ! Un look sophistiqué et élégant qui mettra en valeur votre beauté naturelle.",
      images: [
        "/images/ceremonie.jpg",
        "/images/modele1.jpg",
        "/images/modele2.jpg"
      ],
      features: [
        "Longue tenue jusqu'à 12h",
        "Look sophistiqué et élégant",
        "Adapté à tous les types de peau",
        "Inclut les faux cils"
      ]
    },
    {
      id: 2,
      name: "Maquillage Nude",
      price: "30,000 Fc",
      image: "/images/nude.jpg",
      description: "Un maquillage naturel et léger qui met en valeur votre beauté naturelle. Parfait pour le quotidien ou les occasions spéciales où vous souhaitez un look discret mais élégant.",
      images: [
        "/images/nude.jpg",
        "/images/modele3.jpg",
        "/images/modele4.jpg"
      ],
      features: [
        "Look naturel et léger",
        "Parfait pour le quotidien",
        "Texture confortable",
        "Tenue moyenne de 6-8h"
      ]
    },
    {
      id: 3,
      name: "Kit de Pinceaux",
      price: "39,99 €",
      image: "/images/modele1.jpg",
      description: "Ensemble complet de 8 pinceaux de qualité professionnelle pour un maquillage parfait. Idéal pour les débutantes comme pour les professionnelles.",
      images: [
        "/images/modele1.jpg",
        "/images/modele2.jpg",
        "/images/modele3.jpg"
      ],
      features: [
        "8 pinceaux professionnels",
        "Manches ergonomiques",
        "Poils synthétiques de qualité",
        "Étui de transport inclus"
      ]
    },
    {
      id: 4,
      name: "Civil de Pinceaux",
      price: "9,99 €",
      image: "/images/egerie1.jpg",
      description: "Ensemble complet de 8 pinceaux de qualité professionnelle pour un maquillage parfait. Idéal pour les débutantes comme pour les professionnelles.",
      images: [
        "/images/egerie1.jpg",
        "/images/egerie2.jpg",
        "/images/egerie3.jpg"
      ],
      features: [
        "8 pinceaux professionnels",
        "Manches ergonomiques",
        "Poils synthétiques de qualité",
        "Étui de transport inclus"
      ]
    }
  ]

  const product = products.find(p => p.id === parseInt(id))

  const handleAddToCart = () => {
    addToCart(product)
    toast.success(`${product.name} ajouté au panier`)
  }

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const previousImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 bg-rose-50">
        <Link to="/products" className="inline-flex items-center text-rose-500 mb-6 hover:text-rose-600">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour aux produits
        </Link>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-rose-500">Produit non trouvé</h1>
          <p className="text-gray-600 mt-2">Le produit que vous recherchez n'existe pas.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-rose-50">
      <Link to="/products" className="inline-flex items-center text-rose-500 mb-6 hover:text-rose-600">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Retour aux produits
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Galerie d'images */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <img 
              src={product.images[activeImageIndex]} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {/* Boutons de navigation */}
            <button
              onClick={previousImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-rose-500" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-rose-500" />
            </button>
            {/* Indicateurs de position */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeImageIndex ? 'bg-rose-500' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                  index === activeImageIndex ? 'border-rose-500' : 'border-transparent'
                }`}
              >
                <img 
                  src={image} 
                  alt={`${product.name} - Vue ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Informations produit */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-rose-500">{product.name}</h1>
          <p className="text-2xl font-semibold text-gray-800">{product.price}</p>
          
          <div className="prose prose-lg text-gray-600">
            <p>{product.description}</p>
          </div>

          <Card className="bg-white border-rose-200">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-rose-500 mb-4">Caractéristiques</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <button 
            onClick={handleAddToCart}
            className="w-full bg-rose-500 text-white py-3 px-6 rounded-lg hover:bg-rose-600 transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart className="h-5 w-5" />
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail 