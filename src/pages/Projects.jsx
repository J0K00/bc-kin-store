import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Github, ExternalLink } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Application E-commerce",
      description: "Une plateforme de vente en ligne moderne avec système de paiement intégré",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Réseau Social",
      description: "Une application de réseau social avec fonctionnalités de messagerie et partage de contenu",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "WebSocket"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Dashboard Analytics",
      description: "Tableau de bord interactif pour la visualisation de données en temps réel",
      technologies: ["React", "D3.js", "Express", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 flex flex-col gap-8 p-8 max-w-6xl mx-auto">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Mes Projets</h1>
          <p className="text-xl text-muted-foreground">
            Découvrez mes réalisations et contributions dans le domaine du développement web
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                      {tech}
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
      </main>
    </div>
  )
}

export default Projects 