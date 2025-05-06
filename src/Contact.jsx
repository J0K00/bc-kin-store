import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Textarea } from "./components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-rose-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-rose-500">Contactez-nous</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Formulaire de contact */}
          <div className="bg-white p-6 rounded-lg border border-rose-200">
            <h2 className="text-2xl font-semibold mb-6 text-rose-500">Envoyez-nous un message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">
                  Nom complet
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Votre nom"
                  className="border-rose-200 focus:border-rose-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  className="border-rose-200 focus:border-rose-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-600 mb-1">
                  Sujet
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Sujet de votre message"
                  className="border-rose-200 focus:border-rose-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Votre message"
                  className="border-rose-200 focus:border-rose-500 min-h-[150px]"
                />
              </div>
              <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white">
                Envoyer le message
              </Button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-rose-200">
              <h2 className="text-2xl font-semibold mb-6 text-rose-500">Nos coordonnées</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-rose-500 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-600">Email</h3>
                    <p className="text-gray-600">contact@bkbeauty.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-rose-500 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-600">Téléphone</h3>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-rose-500 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-600">Adresse</h3>
                    <p className="text-gray-600">123 Avenue de la Beauté, 75001 Paris</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-rose-500 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-600">Horaires</h3>
                    <p className="text-gray-600">Lundi - Vendredi: 9h - 19h</p>
                    <p className="text-gray-600">Samedi: 10h - 18h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-rose-200">
              <h2 className="text-2xl font-semibold mb-6 text-rose-500">Prendre rendez-vous</h2>
              <p className="text-gray-600 mb-4">
                Pour prendre rendez-vous pour une consultation beauté ou un atelier maquillage,
                veuillez nous contacter par téléphone ou remplir le formulaire ci-contre.
              </p>
              <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white">
                Réserver un rendez-vous
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-rose-500 mb-4">Nos Services de Beauté</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-rose-200 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-rose-500 mb-2">Consultation Beauté</h3>
              <p className="text-gray-600">Prenez rendez-vous pour une consultation personnalisée avec nos experts en beauté.</p>
            </div>
            <div className="bg-white border border-rose-200 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-rose-500 mb-2">Ateliers Maquillage</h3>
              <p className="text-gray-600">Participez à nos ateliers pour apprendre les techniques de maquillage professionnel.</p>
            </div>
            <div className="bg-white border border-rose-200 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-rose-500 mb-2">Soins Esthétiques</h3>
              <p className="text-gray-600">Découvrez notre gamme de soins esthétiques pour prendre soin de votre peau.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact 