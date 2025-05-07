import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const Home = () => {
  const categories = [
    {
      name: "Sacs",
      image: "/images/modele1.jpg",
      description: "Découvrez notre collection de sacs tendance",
    },
    {
      name: "Lunettes",
      image: "/images/modele2.jpg",
      description: "Des lunettes de soleil et de vue stylées",
    },
    {
      name: "Chaussures",
      image: "/images/modele3.jpg",
      description: "Des chaussures confortables et élégantes",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-bc-black">
        <div className="absolute inset-0 bg-gradient-to-r from-bc-black to-transparent z-10" />
        <div className="absolute inset-0 bg-[url('/images/hero-cover.jpg')] bg-cover bg-center" />
        <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-bc-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-up">
              BC KIN STORE
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-up animation-delay-200">
              Votre destination mode pour des accessoires tendance
            </p>
            <Link
              to="/products"
              className="inline-flex items-center bg-bc-orange text-bc-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors animate-fade-up animation-delay-400"
            >
              Découvrir la collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-bc-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Catégories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div
                key={category.name}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-bc-black to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-bc-white">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="mb-4">{category.description}</p>
                  <Link
                    to={`/products?category=${category.name.toLowerCase()}`}
                    className="inline-flex items-center text-bc-orange hover:text-bc-white transition-colors"
                  >
                    Explorer
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-bc-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-bc-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Qualité Premium</h3>
              <p className="text-gray-600">
                Des produits sélectionnés avec soin pour leur qualité et leur style
              </p>
            </div>
            <div className="text-center">
              <div className="bg-bc-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-bc-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Livraison Rapide</h3>
              <p className="text-gray-600">
                Livraison express partout en France sous 24-48h
              </p>
            </div>
            <div className="text-center">
              <div className="bg-bc-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-bc-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Paiement Sécurisé</h3>
              <p className="text-gray-600">
                Transactions 100% sécurisées avec cryptage SSL
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 