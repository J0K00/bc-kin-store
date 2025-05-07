import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Mail, Phone, MapPin, Clock, Calendar, Send } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { Calendar as CalendarComponent } from "../components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { cn } from "../lib/utils"
import { useLocation } from "react-router-dom"

const Contact = () => {
  const location = useLocation()

  useEffect(() => {
    document.title = "Contact | BC KIN STORE"
  }, [location])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    numero: "",
    subject: "",
    message: "",
    date: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Vérifier si les champs requis sont remplis
    if (!formData.name || !formData.numero || !formData.message) {
      toast.error('Veuillez remplir tous les champs obligatoires')
      return
    }

    const phoneNumber = "243829760815" // Numéro WhatsApp de BC KIN STORE
    
    // Créer le message avec les détails du formulaire
    const message = `*Nouveau message de contact*\n\n` +
      `*Nom:* ${formData.name}\n` +
      `*Email:* ${formData.email || "Non spécifié"}\n` +
      `*Téléphone:* +243${formData.numero}\n` +
      `*Sujet:* ${formData.subject || "Non spécifié"}\n` +
      `*Date souhaitée:* ${formData.date || "Non spécifiée"}\n\n` +
      `*Message:*\n${formData.message}`

    // Encoder le message pour l'URL
    const encodedMessage = encodeURIComponent(message)
    
    // Créer le lien WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    
    // Ouvrir WhatsApp dans un nouvel onglet
    window.open(whatsappUrl, '_blank')
    
    // Réinitialiser le formulaire
    setFormData({
      name: "",
      email: "",
      numero: "",
      subject: "",
      message: "",
      date: "",
    })
    
    toast.success('Redirection vers WhatsApp...')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos
            questions. N'hésitez pas à nous contacter par téléphone, email ou en
            utilisant le formulaire ci-dessous.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="bg-bc-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">Nos Coordonnées</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-bc-orange rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-bc-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Téléphone</h3>
                  <p className="text-gray-600">+243 82 976 0815</p>
                  <p className="text-gray-600">Lun-Ven: 9h-18h</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-bc-orange rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-bc-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-600">contact@bckinstore.com</p>
                  <p className="text-gray-600">Réponse sous 24h</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-bc-orange rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-bc-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Adresse</h3>
                  <p className="text-gray-600">123 Rue de la Mode</p>
                  <p className="text-gray-600">75001 Paris, France</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-bc-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-bc-orange focus:border-bc-orange"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-bc-orange focus:border-bc-orange"
                />
              </div>

              <div>
                <label
                  htmlFor="numero"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Numéro de téléphone *
                </label>
                <input
                  type="tel"
                  id="numero"
                  name="numero"
                  value={formData.numero}
                  onChange={handleChange}
                  required
                  placeholder="Ex: 829760815"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-bc-orange focus:border-bc-orange"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-bc-orange focus:border-bc-orange"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-bc-orange focus:border-bc-orange"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-bc-orange text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Envoyer via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact 