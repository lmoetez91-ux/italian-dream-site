import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, Clock, MapPin, Flag, Sparkles } from 'lucide-react';
import emailjs from 'emailjs-com';

// Initialize EmailJS
emailjs.init('ZiK09fzwI-qBI2Bxs');

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'consultation'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    { id: 'consultation', label: 'Consultation initiale' },
    { id: 'admission', label: 'Demande d\'admission' },
    { id: 'language', label: 'Cours de langue' },
    { id: 'visa', label: 'Assistance visa' },
    { id: 'other', label: 'Autre demande' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Get French service label
    const getServiceLabel = (serviceId) => {
      const service = services.find(s => s.id === serviceId);
      return service ? service.label : 'Consultation initiale';
    };

    // EmailJS Configuration
    const templateParams = {
      // These match your EmailJS template variables
      name: formData.name,
      email: formData.email,
      phone: formData.phone || 'Non fourni',
      service: getServiceLabel(formData.service),
      date: new Date().toLocaleString('fr-FR'),
      message: formData.message || 'Aucun message'
    };

    console.log('Sending email with:', templateParams);

    emailjs.send(
      'service_k5d5dc8',
      'template_kujn1gj',
      templateParams,
      'ZiK09fzwI-qBI2Bxs'
    )
    .then((response) => {
      console.log('Email sent successfully!', response);
      setSubmitStatus('success');
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        message: '',
        service: 'consultation'
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    })
    .catch((error) => {
      console.error('Email error:', error);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="pt-24 pb-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-green-500/10 via-white/10 to-red-500/10 rounded-full blur-3xl"
      />

      <section className="container mx-auto px-6 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card mb-8 border border-green-500/30"
          >
            <Flag className="w-5 h-5 text-green-400" />
            <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-red-400">
              Contactez-nous
            </span>
            <Sparkles className="w-5 h-5 text-yellow-400" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-red-400">
              Contact & Rendez-vous
            </span>
          </h1>
          <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Contactez-nous simplement et laissez nos experts vous guider vers votre rêve italien.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-3xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-8">
                Prendre rendez-vous
              </h2>
              
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30"
                >
                  <p className="text-green-400 font-semibold text-center">
                    ✅ Message envoyé avec succès ! Nous vous contacterons dans les 24h.
                  </p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl bg-gradient-to-r from-red-500/20 to-rose-500/20 border border-red-500/30"
                >
                  <p className="text-red-400 font-semibold text-center">
                    ❌ Une erreur est survenue. Veuillez réessayer ou nous appeler directement.
                  </p>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Service demandé *</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setFormData({...formData, service: service.id})}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                          formData.service === service.id
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                            : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                        }`}
                      >
                        {service.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Nom complet *</label>
                  <input
                    type="text"
                    placeholder="Votre nom et prénom"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email *</label>
                    <input
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Téléphone</label>
                    <input
                      type="tel"
                      placeholder="+216 XX XXX XXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Votre message *</label>
                  <textarea
                    placeholder="Décrivez votre projet, vos questions ou vos besoins..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white font-semibold flex items-center justify-center gap-3 transition-all ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl hover:shadow-green-500/25'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer la demande
                    </>
                  )}
                </motion.button>
                
                <p className="text-xs text-gray-500 text-center">
                  Nous vous répondrons dans les 24 heures ouvrables.
                </p>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Phone className="w-6 h-6 text-green-400" />
                Contact rapide
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Téléphone</h4>
                    <a 
                      href="tel:+21621210213" 
                      className="text-gray-300 hover:text-green-400 transition-colors text-lg font-medium"
                    >
                      +216 21 210 213
                    </a>
                    <p className="text-sm text-gray-400 mt-1">Appel direct 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-white to-gray-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                    <a 
                      href="mailto:italiandream48@gmail.com" 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      italiandream48@gmail.com
                    </a>
                    <p className="text-sm text-gray-400 mt-1">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-rose-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Adresse principale</h4>
                    <p className="text-gray-300">
                      67 Av. Alain Savary, Tunis, Tunisia, 1003
                    </p>
                    <p className="text-sm text-gray-400 mt-1">Centre Principale</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-white" />
                Horaires d'ouverture
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-green-500/10 via-white/10 to-red-500/10">
                  <span className="text-gray-300">Lundi - Vendredi</span>
                  <span className="text-white font-semibold">9h - 18h</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-green-500/5 via-white/5 to-red-500/5">
                  <span className="text-gray-300">Samedi</span>
                  <span className="text-white font-semibold">9h - 13h</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-green-500/5 via-white/5 to-red-500/5">
                  <span className="text-gray-300">Dimanche</span>
                  <span className="text-white font-semibold">Sur RDV</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-lg font-semibold text-white mb-3">Pourquoi nous contacter ?</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-gray-300">Consultation gratuite</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    <span className="text-gray-300">Évaluation de votre dossier</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="text-gray-300">Plan personnalisé d'études</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-gray-300">Estimation des coûts</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          x: [0, 50, 0],
          y: [0, -40, 0]
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-1/3 left-10 w-6 h-6 rounded-full bg-green-400/20 blur-sm"
      />
      <motion.div
        animate={{ 
          x: [0, -60, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, delay: 1 }}
        className="absolute top-1/4 right-20 w-8 h-8 rounded-full bg-red-400/20 blur-sm"
      />
    </div>
  );
};

export default Contact;