'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `
Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone || "Non fourni"}
Service: ${formData.service ? document.querySelector(`option[value="${formData.service}"]`)?.textContent || formData.service : "Non spécifié"}
Sujet: ${formData.subject}

Message: ${formData.message}
    `.trim();
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp in a new tab
    window.open(`https://wa.me/212666764626?text=${encodedMessage}`, '_blank');
    
    // Reset the form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      service: ''
    });
    
    // Show success message
    setSubmitStatus('success');
  };
  
  return (
    <div className="px-4 py-5 sm:p-6 md:px-8 md:py-7 bg-white dark:bg-gray-900 shadow-sm">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-5">Envoyez-nous un message</h3>
      
      {submitStatus === 'success' && (
        <div className="text-center py-8">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 mb-4">
            <svg className="h-6 w-6 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Merci pour votre message!</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Nous vous répondrons dans les plus brefs délais.</p>
          <button
            onClick={() => setSubmitStatus(null)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#E31E24] hover:bg-[#0A1E3C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E31E24] transition-colors duration-300"
          >
            Envoyer un autre message
          </button>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 rounded-lg text-red-700 dark:text-red-300">
          Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer ultérieurement.
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
          <div className="col-span-1">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Nom complet <span className="text-[#E31E24]">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow-sm focus:ring-[#E31E24] focus:border-[#E31E24] block w-full sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md"
              placeholder="Votre nom"
              required
            />
          </div>
          
          <div className="col-span-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-[#E31E24] focus:border-transparent transition-colors"
              placeholder="votre.email@exemple.com"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
          <div className="col-span-1">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-[#E31E24] focus:border-transparent transition-colors"
              placeholder="+33 6 12 34 56 78"
            />
          </div>
          
          <div className="col-span-1">
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Service requis
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#E31E24] focus:border-transparent transition-colors"
            >
              <option value="">Sélectionnez un service</option>
              <option value="pest-control">Lutte antiparasitaire</option>
              <option value="disinfection">Désinfection</option>
              <option value="rodent-control">Dératisation</option>
              <option value="insect-control">Désinsectisation</option>
              <option value="other">Autre</option>
            </select>
          </div>
        </div>
        
        <div className="col-span-1">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Sujet <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-[#E31E24] focus:border-transparent transition-colors"
            placeholder="Sujet de votre message"
          />
        </div>
        
        <div className="col-span-1">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-[#E31E24] focus:border-transparent transition-colors resize-none"
            placeholder="Décrivez votre besoin en détail..."
          ></textarea>
        </div>
        
        <div className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            id="gdpr" 
            required
            className="w-5 h-5 text-[#E31E24] border-gray-300 rounded focus:ring-[#E31E24]" 
          />
          <label htmlFor="gdpr" className="text-sm text-gray-700 dark:text-gray-300">
            J'accepte que mes données soient traitées conformément à la politique de confidentialité <span className="text-red-500">*</span>
          </label>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-4 bg-[#E31E24] hover:bg-[#c91b1f] text-white font-semibold rounded-lg shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#E31E24] focus:ring-opacity-50 flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Envoi en cours...
              </>
            ) : (
              'Envoyer le message'
            )}
          </button>
        </div>
      </form>
    </div>
  );
} 