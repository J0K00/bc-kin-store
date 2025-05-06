import ProductCard from "./components/ProductCard"

const Products = () => {
  // Simulons des données de produits (à remplacer par vos vraies données)
  const products = [
    {
      id: 1,
      name: "Fond de teint HD",
      price: "45,00 €",
      image: "/images/client1.jpg"
    },
    {
      id: 2,
      name: "Rouge à lèvres mat",
      price: "25,00 €",
      image: "/images/client2.jpg"
    },
    
    {
      id: 3,
      name: "Palette yeux",
      price: "55,00 €",
      image: "/images/client3.jpg"
    },
    {
      id: 4,
      name: "Palette yeux",
      price: "55,00 €",
      image: "/images/client4.jpg"
    }
    // Ajoutez d'autres produits ici
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