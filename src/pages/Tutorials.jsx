import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Play, Clock, User, X } from "lucide-react"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

const Tutorials = () => {
  const [selectedTutorial, setSelectedTutorial] = useState(null)
  const location = useLocation()

  useEffect(() => {
    // Mettre à jour le titre de la page
    document.title = "Tutoriels | BK Beauty"
  }, [location])

  const tutorials = [
    {
      title: "Maquillage de Jour",
      description: "Apprenez à créer un look naturel et frais pour votre routine quotidienne",
      duration: "15 min",
      level: "Débutant",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000",
      videoUrl: "/videos/Bk_Beauty.mp4",
    },
    {
      title: "Maquillage de Soirée",
      description: "Techniques avancées pour un maquillage glamour et sophistiqué",
      duration: "25 min",
      level: "Intermédiaire",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
    },
    {
      title: "Contouring Pro",
      description: "Maîtrisez l'art du contouring pour sculpter votre visage",
      duration: "20 min",
      level: "Avancé",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
    },
    {
      title: "Smokey Eyes",
      description: "Créez un regard intense et mystérieux avec notre tutoriel smokey eyes",
      duration: "30 min",
      level: "Intermédiaire",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_4",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 bg-rose-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-rose-500">Nos Tutoriels</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => (
            <Card key={tutorial.title} className="bg-white border-rose-200">
              <div className="relative h-48">
                <img
                  src={tutorial.image}
                  alt={tutorial.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <CardTitle className="text-white text-xl">{tutorial.title}</CardTitle>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">{tutorial.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{tutorial.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{tutorial.level}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-rose-500 hover:bg-rose-600 text-white"
                  onClick={() => setSelectedTutorial(tutorial)}
                >
                  <Play className="h-4 w-4 mr-2" />
                  Regarder le tutoriel
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedTutorial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="bg-white rounded-lg w-full max-w-4xl relative">
            <button
              onClick={() => setSelectedTutorial(null)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-rose-500 mb-2">{selectedTutorial.title}</h2>
              <p className="text-gray-600 mb-4">{selectedTutorial.description}</p>
              <div className="relative pt-[56.25%] w-full">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={selectedTutorial.videoUrl}
                  title={selectedTutorial.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Tutorials 