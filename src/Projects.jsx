import { useState } from "react"
import { Button } from "./components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card"
import { Github, ExternalLink } from "lucide-react"

const Projects = () => {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-commerce React",
      description: "Site e-commerce moderne avec panier et paiement",
      tags: ["React", "Node.js", "MongoDB"],
      image: "/project1.jpg",
      github: "https://github.com/votre-profil/projet1",
      demo: "https://demo-projet1.com",
    },
    {
      id: 2,
      title: "Application de Gestion",
      description: "Système de gestion de tâches et de projets",
      tags: ["Next.js", "TypeScript", "Prisma"],
      image: "/project2.jpg",
      github: "https://github.com/votre-profil/projet2",
      demo: "https://demo-projet2.com",
    },
    {
      id: 3,
      title: "Portfolio Artistique",
      description: "Site vitrine pour artiste avec galerie",
      tags: ["React", "Tailwind", "Framer Motion"],
      image: "/project3.jpg",
      github: "https://github.com/votre-profil/projet3",
      demo: "https://demo-projet3.com",
    },
  ]

  const filters = [
    { id: "all", label: "Tous" },
    { id: "react", label: "React" },
    { id: "next", label: "Next.js" },
    { id: "typescript", label: "TypeScript" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Mes Projets</h1>
      
      {/* Filtres */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <Button
            key={f.id}
            variant={filter === f.id ? "default" : "outline"}
            onClick={() => setFilter(f.id)}
            className="rounded-full"
          >
            {f.label}
          </Button>
        ))}
      </div>

      {/* Grille de projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <div className="aspect-video relative">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Projects 