import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { ArrowRight, Instagram, Facebook, Youtube } from "lucide-react"

const Cover = () => {
  const slides = [
    {
      image: "/images/cover1.jpg",
      title: "Découvrez notre Collection Automne 2024",
      description: "Des produits de beauté innovants pour sublimer votre routine beauté",
    },
    {
      image: "/images/cover2.jpg",
      title: "Ateliers Maquillage",
      description: "Apprenez les techniques de maquillage professionnel avec nos experts",
    },
    {
      image: "/images/cover3.jpg",
      title: "Soins Esthétiques",
      description: "Prenez soin de votre peau avec nos soins personnalisés",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 relative"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="relative h-[600px] flex items-center justify-center text-center px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {slide.title}
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  {slide.description}
                </p>
                <Button className="bg-rose-500 hover:bg-rose-600 text-white">
                  <Link to="/products">Découvrir</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-rose-500" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Cover