import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Brush, Palette, Sparkles, Heart } from "lucide-react"

const About = () => {
  const skills = [
    {
      title: "Maquillage",
      icon: <Brush className="h-6 w-6 text-rose-500" />,
      items: ["Maquillage de jour", "Maquillage de soirée", "Maquillage artistique", "Contouring"],
    },
    {
      title: "Soins",
      icon: <Heart className="h-6 w-6 text-rose-500" />,
      items: ["Soins du visage", "Routine beauté", "Masques", "Hydratation"],
    },
    {
      title: "Tendances",
      icon: <Sparkles className="h-6 w-6 text-rose-500" />,
      items: ["Nouveautés", "Tendances saisonnières", "Inspirations", "Tutoriels"],
    },
    {
      title: "Produits",
      icon: <Palette className="h-6 w-6 text-rose-500" />,
      items: ["Fond de teint", "Rouge à lèvres", "Palettes", "Accessoires"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 bg-rose-50">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-rose-500">À propos de BK Beauty</h1>
        
        <div className="prose prose-lg mb-12 text-gray-600">
          <p>
            Bienvenue dans l'univers de BK Beauty, votre destination ultime pour tout ce qui concerne le maquillage et la beauté.
            Notre mission est de vous aider à révéler votre beauté naturelle tout en vous permettant d'explorer votre créativité.
          </p>
          <p>
            Nous proposons une gamme complète de produits de qualité, des tutoriels détaillés et des conseils personnalisés
            pour vous accompagner dans votre parcours beauté. Notre approche est centrée sur l'expression de soi et
            l'épanouissement personnel à travers l'art du maquillage.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-rose-500">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <Card key={skill.title} className="bg-white border-rose-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-rose-500">
                  {skill.icon}
                  {skill.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-600">
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About 