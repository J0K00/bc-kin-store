import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import Cover from "../components/Cover"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    document.title = "Accueil | BK Beauty"
  }, [location])

  return (
    <>
      <Cover />
      <div className="container mx-auto px-12 py-8">
        <h1 className="text-4xl font-bold text-center text-rose-500 mb-6">Nos Modèles</h1>
        
        <div className="grid grid-cols-2 border-t-2 border-rose-200 pt-8 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Card className="bg-white border-rose-200">
              <div className="">
                <img src="/images/modele2.jpg" className="w-full h-full object-cover rounded-t-lg shadow-sm" alt="" />
              </div>
            {/* <CardHeader>
              <CardTitle className="text-rose-500">Palette de Fards à Paupières</CardTitle>
              <CardDescription className="text-gray-600">Collection Automne 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Une palette de 12 teintes allant des tons neutres aux couleurs vives, parfaite pour créer des looks du jour et du soir.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="text-rose-500 border-rose-200 hover:bg-rose-500 hover:text-white">
                Voir le produit
              </Button>
            </CardFooter> */}
          </Card>

          <Card className="bg-white border-rose-200 shadow-sm">
              <div className="">
                <img src="/images/modele1.jpg" className="w-full h-full object-cover rounded-t-lg" alt="" />
              </div>
            {/* <CardHeader>
              <CardTitle className="text-rose-500">Rouge à Lèvres Liquide</CardTitle>
              <CardDescription className="text-gray-600">Collection Signature</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Un rouge à lèvres liquide longue tenue avec une formule hydratante et un fini mat élégant.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="text-rose-500 border-rose-200 hover:bg-rose-500 hover:text-white">
                Voir le produit
              </Button>
            </CardFooter> */}
          </Card>

          <Card className="bg-white border-rose-200">
              <div className="">
                <img src="/images/modele3.jpg" className="w-full h-full object-cover rounded-t-lg shadow-sm" alt="" />
              </div>
            {/* <CardHeader>
              <CardTitle className="text-rose-500">Kit de Pinceaux</CardTitle>
              <CardDescription className="text-gray-600">Collection Professionnelle</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Un ensemble complet de 8 pinceaux de qualité professionnelle pour un maquillage parfait.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="text-rose-500 border-rose-200 hover:bg-rose-500 hover:text-white">
                Voir le produit
              </Button>
            </CardFooter> */}
          </Card>
          <Card className="bg-white border-rose-200">
              <div className="">
                <img src="/images/modele4.jpg" className="w-full h-full object-cover rounded-t-lg shadow-sm" alt="" />
              </div>
            {/* <CardHeader>
              <CardTitle className="text-rose-500">Kit de Pinceaux</CardTitle>
              <CardDescription className="text-gray-600">Collection Professionnelle</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Un ensemble complet de 8 pinceaux de qualité professionnelle pour un maquillage parfait.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="text-rose-500 border-rose-200 hover:bg-rose-500 hover:text-white">
                Voir le produit
              </Button>
            </CardFooter> */}
          </Card>
        </div>
        
      </div>

      <div className="container mx-auto px-12 py-8">
        <h1 className="text-4xl font-bold text-center text-rose-500 mb-6">Nos Egéries</h1>
        
        <div className="grid grid-cols-2 border-t-2 border-rose-200 pt-8 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Card className="bg-white border-rose-200">
              <div className="">
                <img src="/images/egerie7.jpg" className="w-full h-full object-cover rounded-t-lg shadow-sm" alt="" />
              </div>
            {/* <CardHeader>
              <CardTitle className="text-rose-500">Palette de Fards à Paupières</CardTitle>
              <CardDescription className="text-gray-600">Collection Automne 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Une palette de 12 teintes allant des tons neutres aux couleurs vives, parfaite pour créer des looks du jour et du soir.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="text-rose-500 border-rose-200 hover:bg-rose-500 hover:text-white">
                Voir le produit
              </Button>
            </CardFooter> */}
          </Card>

          <Card className="bg-white border-rose-200 shadow-sm">
              <div className="">
                <img src="/images/egerie1.jpg" className="w-full h-full object-cover rounded-t-lg" alt="" />
              </div>
            {/* <CardHeader>
              <CardTitle className="text-rose-500">Rouge à Lèvres Liquide</CardTitle>
              <CardDescription className="text-gray-600">Collection Signature</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Un rouge à lèvres liquide longue tenue avec une formule hydratante et un fini mat élégant.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="text-rose-500 border-rose-200 hover:bg-rose-500 hover:text-white">
                Voir le produit
              </Button>
            </CardFooter> */}
          </Card>

          <Card className="bg-white border-rose-200">
              <div className="">
                <img src="/images/egerie3.jpg" className="w-full h-full object-cover rounded-t-lg shadow-sm" alt="" />
              </div>
            {/* <CardHeader>
              <CardTitle className="text-rose-500">Kit de Pinceaux</CardTitle>
              <CardDescription className="text-gray-600">Collection Professionnelle</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Un ensemble complet de 8 pinceaux de qualité professionnelle pour un maquillage parfait.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="text-rose-500 border-rose-200 hover:bg-rose-500 hover:text-white">
                Voir le produit
              </Button>
            </CardFooter> */}
          </Card>
          <Card className="bg-white border-rose-200">
              <div className="">
                <img src="/images/egerie4.jpg" className="w-full h-full object-cover rounded-t-lg shadow-sm" alt="" />
              </div>
            {/* <CardHeader>
              <CardTitle className="text-rose-500">Kit de Pinceaux</CardTitle>
              <CardDescription className="text-gray-600">Collection Professionnelle</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Un ensemble complet de 8 pinceaux de qualité professionnelle pour un maquillage parfait.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="text-rose-500 border-rose-200 hover:bg-rose-500 hover:text-white">
                Voir le produit
              </Button>
            </CardFooter> */}
          </Card>
        </div>
        
      </div>
    </>
  )
}

export default Home 