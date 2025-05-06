import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Mail, Phone, MapPin, Clock, Calendar, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'
import { Calendar as CalendarComponent } from "../components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { cn } from "../lib/utils"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    numero: "",
    subject: "",
    message: "",
    date: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleWhatsAppSubmit = () => {
    const phoneNumber = "+243829760815" // Numéro WhatsApp de BK Beauty
    
    // Créer le message avec les détails du formulaire
    const message = `*Nouveau message de contact*\n\n` +
      `*Nom:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Téléphone:* +243${formData.numero}\n` +
      `*Sujet:* ${formData.subject}\n` +
      `*Date souhaitée:* ${formData.date || "Non spécifiée"}\n\n` +
      `*Message:*\n${formData.message}`

    // Encoder le message pour l'URL
    const encodedMessage = encodeURIComponent(message)
    
    // Créer le lien WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    
    // Ouvrir WhatsApp dans un nouvel onglet
    window.open(whatsappUrl, '_blank')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await emailjs.send(
        'service_svv9m29',
        'template_1yhudka',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'zEFp9UE9X_jyzyEO3'
      )
      
      toast.success('Message envoyé avec succès !')
      setFormData({
        name: "",
        email: "",
        numero: "",
        subject: "",
        message: "",
        date: "",
      })
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error)
      toast.error('Une erreur est survenue lors de l\'envoi du message.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-rose-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-rose-500">Contactez-nous</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Formulaire de contact */}
          <div className="bg-white p-6 rounded-lg border border-rose-200">
            <h2 className="text-2xl font-semibold mb-6 text-rose-500">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">
                  Nom
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-rose-200 focus:border-rose-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-rose-200 focus:border-rose-500"
                />
              </div>
              <div>
                <label htmlFor="numero" className="block text-sm font-medium text-gray-600 mb-1">
                  Numéro de téléphone (Ex: 820000000)
                </label>
                <Input
                  id="numero"
                  name="numero"
                  type="number"
                  value={formData.numero}
                  onChange={handleChange}
                  minLength={9}
                  required
                  className="border-rose-200 focus:border-rose-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-600 mb-1">
                  Sujet
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border-rose-200 focus:border-rose-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="border-rose-200 focus:border-rose-500 min-h-[50px]"
                />
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-600 mb-1">
                  Date de rendez-vous souhaitée
                </label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="border-rose-200 focus:border-rose-500"
                />
              </div>
              <div className="flex gap-2 flex-col">
                <Button
                  type="submit"
                  className="flex-1 bg-rose-500 hover:bg-rose-600 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
                <Button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="bg-green-500 hover:bg-green-600 text-white"
                  disabled={isLoading}
                >
                  <Send className="h-4 w-4 mr-2" />
                    {isLoading ? "Envoi en cours..." : "Envoyer via WhatsApp"}
                </Button>
              </div>
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
                    <p className="text-gray-600">bkbeauty@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-rose-500 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-600">Téléphone</h3>
                    <p className="text-gray-600">+243 829 941 808</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-rose-500 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-600">Adresse</h3>
                    <p className="text-gray-600">Lemba Terminus, Kinsasa</p>
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

            {/* <div className="bg-white p-6 rounded-lg border border-rose-200">
              <h2 className="text-2xl font-semibold mb-6 text-rose-500">Prendre rendez-vous</h2>
              <p className="text-gray-600 mb-4">
                Pour prendre rendez-vous pour une consultation beauté ou un atelier maquillage,
                veuillez nous contacter par téléphone ou remplir le formulaire ci-contre.
              </p>
              <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white">
                <Calendar className="h-4 w-4 mr-2" />
                Réserver un rendez-vous
              </Button>
            </div> */}
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