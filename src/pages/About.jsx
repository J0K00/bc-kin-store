import { Star, Package, Heart, Shield } from "lucide-react"

const About = () => {
  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Qualité Premium",
      description:
        "Nous sélectionnons avec soin chaque produit pour garantir une qualité exceptionnelle.",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Livraison Rapide",
      description:
        "Livraison express partout en France sous 24-48h avec suivi en temps réel.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Service Client",
      description:
        "Une équipe dédiée à votre service pour répondre à toutes vos questions.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Paiement Sécurisé",
      description:
        "Transactions 100% sécurisées avec cryptage SSL pour votre tranquillité.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-bc-black">
        <div className="absolute inset-0 bg-gradient-to-r from-bc-black to-transparent z-10" />
        <div className="absolute inset-0 bg-[url('/images/about-cover.jpg')] bg-cover bg-center" />
        <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-bc-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">
              À propos de BC KIN STORE
            </h1>
            <p className="text-xl animate-fade-up animation-delay-200">
              Votre destination mode pour des accessoires tendance
            </p>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
              <p className="text-gray-600 mb-4">
                Fondée en 2024, BC KIN STORE est née de la passion pour la mode et
                le style. Notre mission est de vous offrir une sélection
                soigneusement choisie de sacs, lunettes et chaussures qui
                allient élégance, qualité et tendance.
              </p>
              <p className="text-gray-600">
                Nous croyons que les accessoires sont essentiels pour compléter
                votre style personnel. C'est pourquoi nous nous efforçons de
                vous proposer des pièces uniques qui vous permettront de vous
                démarquer tout en restant dans l'air du temps.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/about-story.jpg"
                alt="Notre histoire"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 bg-bc-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-bc-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-bc-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Engagement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Notre Engagement</h2>
            <p className="text-gray-600 mb-8">
              Chez BC KIN STORE, nous nous engageons à vous offrir une
              expérience d'achat exceptionnelle. Nous sélectionnons
              méticuleusement chaque produit pour garantir sa qualité et son
              style. Notre équipe est à votre disposition pour vous accompagner
              dans vos choix et répondre à toutes vos questions.
            </p>
            <p className="text-gray-600">
              Nous croyons en une mode responsable et durable. C'est pourquoi
              nous travaillons avec des marques qui partagent nos valeurs et
              notre vision d'une mode éthique et respectueuse de
              l'environnement.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 