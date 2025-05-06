import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import ProductCard from "../components/ProductCard"

const Products = () => {
  const location = useLocation()

  useEffect(() => {
    document.title = "Produits | BK Beauty"
  }, [location])

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

  return (
    <div className="container mx-auto px-4 py-8 bg-rose-50">
      <h1 className="text-4xl font-bold mb-8 text-rose-500">Nos Produits</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products 