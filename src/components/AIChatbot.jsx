import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "👋 Bonjour ! Je suis votre assistant IA d'Italian Dream 🇮🇹\n\nJe connais TOUT sur nos services ! Posez-moi n'importe quelle question sur:\n• 🎓 Admissions & processus\n• 📍 Nos centres (Tunis, Sfax, Kairouan)\n• 📅 Prendre rendez-vous\n• 🏫 Universités partenaires\n• 🛂 Visa & documents\n• 🇮🇹 Cours de langue\n• 🏠 Logement en Italie\n• 📞 Contact & support\n\nComment puis-je vous aider ?", 
      sender: 'bot',
      quickReplies: [
        { text: "🎓 Admissions", value: "admissions" },
        { text: "📍 Nos centres", value: "centres" },
        { text: "📅 Rendez-vous", value: "rdv" },
        { text: "📞 Contact", value: "contact" }
      ]
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // RESPONSE DATABASE
  const getBotResponse = (userInput) => {
    const inputLower = userInput.toLowerCase();
    
    const responseMap = {
      // =========== ADMISSIONS ===========
      'admissions': {
        text: `🎓 **PROCESSUS D'ADMISSION COMPLET**

**ÉTAPES CHRONOLOGIQUES:**
1. **Consultation gratuite** (en ligne ou en centre)
2. **Évaluation du dossier** (analyse sous 48h)
3. **Choix des universités** (15+ partenaires en Italie)
4. **Préparation des documents** (nous aidons avec tout)
5. **Test de langue** (italien B1/B2 ou anglais)
6. **Inscription universitaire**
7. **Demande de visa étudiant**
8. **Préparation au départ**

**⏱️ DÉLAIS:** 3 à 6 mois
**✅ TAUX DE RÉUSSITE:** 98%

**📋 DOCUMENTS REQUIS:**
• Baccalauréat
• Relevés de notes
• Passeport
• CV
• Lettres de motivation`,
        quickReplies: [
          { text: "📋 Documents requis", value: "documents" },
          { text: "🏫 Universités", value: "universites" },
          { text: "🇮🇹 Test de langue", value: "langue" },
          { text: "📅 Prendre RDV", value: "rdv" }
        ]
      },
      
      // =========== NOS CENTRES ===========
      'centres': {
        text: `📍 **NOS CENTRES ITALIAN DREAM**

**🏢 TUNIS - Centre Principal:**
📍 Adresse: 67 Av. Alain Savary, Tunis, Tunisia, 1003
📞 Téléphone: +216 21 210 213
⏰ Horaires: Lun-Ven: 9h-18h | Sam: 9h-13h

**🏢 SFAX - Bureau:**
📍 Adresse: Ennassria, Immeuble Zaphir, Bloc B, 7ème étage
📞 Téléphone: +216 21 210 213
⏰ Horaires: Lun-Ven: 9h-18h | Sam: 9h-13h

**🏢 KAIROUAN - Bureau:**
📍 Adresse: Convention avec Centre Tamwil Visa
📞 Téléphone: +216 21 210 213
⏰ Horaires: Sur rendez-vous

**📱 CONTACT UNIQUE:**
• Téléphone/WhatsApp: +216 21 210 213
• Email: italiandream48@gmail.com
• Site web: www.italiendream.com

**🎯 SERVICES DISPONIBLES DANS TOUS LES CENTRES:**
• Consultation gratuite d'orientation
• Évaluation de dossier personnalisée
• Préparation aux tests de langue
• Assistance visa étudiant
• Orientation universitaire
• Support administratif complet`,
        quickReplies: [
          { text: "🗺️ Centre Tunis", value: "tunis" },
          { text: "🗺️ Bureau Sfax", value: "sfax" },
          { text: "🗺️ Bureau Kairouan", value: "kairouan" },
          { text: "📅 Prendre RDV", value: "rdv" }
        ]
      },
      
      // =========== CENTRE TUNIS ===========
      'tunis': {
        text: `🏢 **CENTRE PRINCIPAL - TUNIS**

📍 **Adresse exacte:**
Italian Dream Education
67 Avenue Alain Savary
Tunis 1003, Tunisie

📞 **Contact:**
• Téléphone/WhatsApp: +216 21 210 213
• Email: italiandream48@gmail.com

⏰ **Horaires d'ouverture:**
• Lundi à Vendredi: 9h00 - 18h00
• Samedi: 9h00 - 13h00
• Dimanche: Sur rendez-vous

🚗 **Accès & Transport:**
• Zone centre-ville de Tunis
• Parking disponible
• Accessible PMR

👥 **Équipe sur place:**
• Conseillers d'orientation
• Spécialistes visa
• Formateurs de langue
• Support administratif

🎯 **Services à Tunis:**
• Centre de formation linguistique
• Préparation de dossier complet
• Simulation d'entretien visa
• Événements d'information`,
        quickReplies: [
          { text: "📞 Appeler Tunis", value: "call_tunis" },
          { text: "📅 RDV à Tunis", value: "rdv_tunis" },
          { text: "🗺️ Bureau Sfax", value: "sfax" },
          { text: "👥 Notre équipe", value: "equipe" }
        ]
      },
      
      // =========== BUREAU SFAX ===========
      'sfax': {
        text: `🏢 **BUREAU SFAX**

📍 **Adresse exacte:**
Italian Dream Sfax
Ennassria, Immeuble Zaphir
Bloc B, 7ème étage
Sfax, Tunisie

📞 **Contact:**
• Téléphone/WhatsApp: +216 21 210 213
• Email: italiandream48@gmail.com

⏰ **Horaires d'ouverture:**
• Lundi à Vendredi: 9h00 - 18h00
• Samedi: 9h00 - 13h00

🎯 **Services disponibles:**
• Consultations d'orientation gratuites
• Évaluation préliminaire de dossier
• Orientation universitaire
• Information sur les bourses
• Prise de rendez-vous pour Tunis

👥 **Équipe Sfax:**
• Conseillers permanents
• Support à distance
• Liaison avec centre principal`,
        quickReplies: [
          { text: "📞 Appeler Sfax", value: "call_sfax" },
          { text: "📅 RDV à Sfax", value: "rdv_sfax" },
          { text: "🗺️ Centre Tunis", value: "tunis" },
          { text: "🗺️ Bureau Kairouan", value: "kairouan" }
        ]
      },
      
      // =========== BUREAU KAIROUAN ===========
      'kairouan': {
        text: `🏢 **BUREAU KAIROUAN**

📍 **Adresse & Partenariat:**
Italian Dream Kairouan
Convention avec Centre Tamwil Visa
Kairouan, Tunisie

📞 **Contact:**
• Téléphone/WhatsApp: +216 21 210 213
• Email: italiandream48@gmail.com

⏰ **Horaires:**
• Exclusivement sur rendez-vous
• Prise de RDV par téléphone/WhatsApp

🤝 **Partenariat Tamwil Visa:**
• Espace partagé pour consultations
• Infrastructure disponible sur RDV
• Point de collecte de documents

🎯 **Services sur RDV:**
• Consultations d'information
• Première évaluation de projet
• Orientation générale
• Programmation de RDV à Tunis

📋 **Procédure:**
1. Appelez pour prise de RDV
2. Consultation sur place
3. Orientation vers centre principal si nécessaire`,
        quickReplies: [
          { text: "📞 RDV Kairouan", value: "rdv_kairouan" },
          { text: "🗺️ Centre Tunis", value: "tunis" },
          { text: "🗺️ Bureau Sfax", value: "sfax" },
          { text: "📅 Prendre RDV", value: "rdv" }
        ]
      },
      
      // =========== RENDEZ-VOUS ===========
      'rdv': {
        text: `📅 **PRENDRE RENDEZ-VOUS AVEC ITALIAN DREAM**

**📞 PAR TÉLÉPHONE/WHATSAPP:**
+216 21 210 213
• Lun-Ven: 9h-18h
• Sam: 9h-13h

**📧 PAR EMAIL:**
italiandream48@gmail.com

**📍 CHOIX DE CENTRE:**
1. **Tunis (Principal):** 67 Av. Alain Savary
   Horaires: Lun-Ven 9h-18h, Sam 9h-13h
   
2. **Sfax (Bureau):** Ennassria, Immeuble Zaphir
   Horaires: Lun-Ven 9h-18h, Sam 9h-13h
   
3. **Kairouan (Bureau):** Convention Tamwil Visa
   **Uniquement sur RDV**

**⏰ DÉLAIS DE RÉPONSE:**
• Téléphone: Immédiat pendant horaires
• Email: Réponse sous 24h ouvrables
• RDV physique: Sous 48h

**🎁 PREMIER RDV GRATUIT:**
Consultation + évaluation de dossier offerte!`,
        quickReplies: [
          { text: "📞 Appeler maintenant", value: "telephone" },
          { text: "📧 Envoyer email", value: "email" },
          { text: "📍 Centre Tunis", value: "tunis" },
          { text: "📍 Bureau Sfax", value: "sfax" }
        ]
      },
      
      // =========== CONTACT ===========
      'contact': {
        text: `📞 **CONTACTER ITALIAN DREAM**

**📧 EMAIL UNIQUE:**
italiandream48@gmail.com

**📱 TÉLÉPHONE/WHATSAPP:**
+216 21 210 213
• Standard pour tous les centres
• Lun-Ven: 9h-18h
• Sam: 9h-13h

**📍 CENTRES PHYSIQUES:**
• **Tunis (Principal):** 67 Av. Alain Savary, 1003
• **Sfax (Bureau):** Ennassria, Immeuble Zaphir, Bloc B, 7ème étage
• **Kairouan (Bureau):** Convention Tamwil Visa (sur RDV)

**⏰ HORAIRES:**
• Tunis & Sfax: Lun-Ven 9h-18h, Sam 9h-13h
• Kairouan: Uniquement sur RDV
• Support WhatsApp: 24/7

**💬 RÉSEAUX:**
• Site web: www.italiendream.com
• Page Facebook: /ItalianDream
• Chaîne YouTube: Italian Dream Education

**⚡ CONTACT RAPIDE:**
1. Appelez: +216 21 210 213
2. WhatsApp: Même numéro
3. Email: italiandream48@gmail.com`,
        quickReplies: [
          { text: "📞 Appeler maintenant", value: "telephone" },
          { text: "📧 Envoyer email", value: "email" },
          { text: "📍 Centres", value: "centres" },
          { text: "📅 Prendre RDV", value: "rdv" }
        ]
      },
      
      // =========== UNIVERSITÉS ===========
      'universites': {
        text: `🏫 **UNIVERSITÉS PARTENAIRES EN ITALIE**

**🎓 TOP UNIVERSITÉS:**
• Université de Bologne
• Politecnico di Milano
• Université de Rome "La Sapienza"
• Université de Milan
• Université de Florence
• Université de Turin
• Université de Padoue

**📚 DOMAINES D'EXCELLENCE:**
• Architecture & Design
• Médecine & Santé
• Ingénierie & Technologie
• Business & Économie
• Arts & Culture
• Droit & Sciences politiques

**🤝 NOS PARTENARIATS:**
• Accords avec 15+ universités
• Procédures accélérées
• Support dédié par université
• Bourses réservées

**🔍 NOUS TROUVONS** l'université parfaite pour votre profil!`,
        quickReplies: [
          { text: "🎨 Design/Architecture", value: "design" },
          { text: "⚕️ Médecine", value: "medecine" },
          { text: "🔬 Ingénierie", value: "ingenierie" },
          { text: "💼 Business", value: "business" }
        ]
      },
      
      // =========== DOCUMENTS ===========
      'documents': {
        text: `📋 **DOCUMENTS REQUIS POUR L'ADMISSION**

**✅ OBLIGATOIRES:**
1. Passeport valide
2. Baccalauréat (original + copie)
3. Relevés de notes officiels
4. CV en italien/anglais
5. Lettre de motivation
6. Certificat de langue (B1/B2 italien)
7. Photos d'identité
8. Attestation bancaire

**📄 POUR CERTAINS PROGRAMMES:**
• Portfolio (design, architecture)
• Lettres de recommandation
• Test d'entretien
• Certificat médical

**⚡ NOTRE SERVICE:**
• Aide à la préparation des documents
• Conseils personnalisés
• Vérification complète`,
        quickReplies: [
          { text: "🇮🇹 Test langue", value: "langue" },
          { text: "📝 CV & lettres", value: "cv" },
          { text: "📅 Prendre RDV", value: "rdv" }
        ]
      },
      
      // =========== LANGUE ===========
      'langue': {
        text: `🇮🇹 **EXIGENCES LINGUISTIQUES ITALIE**

**📊 NIVEAUX REQUIS:**
• Licence: B1 italien minimum
• Master: B2 italien ou anglais
• Programmes anglais: IELTS 6.0/TOEFL 80

**🎯 TESTS ACCEPTÉS:**
• CELI (Certificat d'italien)
• CILS (Certificat d'italien)
• PLIDA (Dante Alighieri)
• IELTS/TOEFL (anglais)

**📚 NOS COURS DE PRÉPARATION:**
• Cours intensifs
• Cours du soir
• Préparation en ligne
• Simulation de test

**✅ TAUX DE RÉUSSITE:** 96%
**💡 CONSEIL:** Commencez 6 mois à l'avance!`,
        quickReplies: [
          { text: "📚 Cours intensifs", value: "cours" },
          { text: "🎯 Test CILS/CELI", value: "test_langue" },
          { text: "📅 Inscription cours", value: "inscription_cours" }
        ]
      },
      
      // =========== DEFAULT ===========
      'default': {
        text: `🇮🇹 **ITALIAN DREAM - VOTRE CHEMIN VERS L'ITALIE**

**🏆 QUI SOMMES-NOUS ?**
Pilote dans la migration étudiante vers l'Italie, nous accompagnons chaque étudiant dans son projet académique.

**📍 NOS CENTRES:**
• Tunis: 67 Av. Alain Savary
• Sfax: Ennassria, Immeuble Zaphir
• Kairouan: Convention Tamwil Visa

**📞 CONTACT:**
• Téléphone/WhatsApp: +216 21 210 213
• Email: italiandream48@gmail.com
• Site: www.italiendream.com

**🤔 COMMENT PUIS-JE VOUS AIDER ?**`,
        quickReplies: [
          { text: "🎓 Admissions", value: "admissions" },
          { text: "📍 Nos centres", value: "centres" },
          { text: "📅 Prendre RDV", value: "rdv" },
          { text: "📞 Contact", value: "contact" }
        ]
      }
    };

    // SMART KEYWORD MATCHING
    const keywordMap = {
      // Admissions
      'admission': 'admissions',
      'inscription': 'admissions',
      'processus': 'admissions',
      'procédure': 'admissions',
      'étudier': 'admissions',
      'études': 'admissions',
      
      // Centers
      'centre': 'centres',
      'centres': 'centres',
      'localisation': 'centres',
      'adresse': 'centres',
      'adresses': 'centres',
      'tunis': 'tunis',
      'sfax': 'sfax',
      'kairouan': 'kairouan',
      'siège': 'tunis',
      
      // Rendez-vous & Contact
      'rdv': 'rdv',
      'rendez-vous': 'rdv',
      'rdvs': 'rdv',
      'prendre': 'rdv',
      'contact': 'contact',
      'contacter': 'contact',
      'joindre': 'contact',
      'appeler': 'contact',
      'téléphone': 'contact',
      'email': 'contact',
      'mail': 'contact',
      'whatsapp': 'contact',
      'gmail': 'contact',
      
      // Universities
      'université': 'universites',
      'universités': 'universites',
      'école': 'universites',
      'écoles': 'universites',
      'faculté': 'universites',
      
      // Documents
      'document': 'documents',
      'documents': 'documents',
      'dossier': 'documents',
      'papiers': 'documents',
      
      // Language
      'langue': 'langue',
      'italien': 'langue',
      'anglais': 'langue',
      'language': 'langue',
      'test': 'langue',
      'niveau': 'langue',
      
      // Others
      'logement': 'logement',
      'visa': 'visa',
      'bourse': 'bourses',
      'coût': 'couts'
    };

    // Check for keywords
    for (const [keyword, responseKey] of Object.entries(keywordMap)) {
      if (inputLower.includes(keyword)) {
        return responseMap[responseKey] || responseMap.default;
      }
    }

    // Check direct matches
    for (const [key, response] of Object.entries(responseMap)) {
      if (userInput === key || inputLower === key) {
        return response;
      }
    }

    return responseMap.default;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user'
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    setIsTyping(true);
    
    setTimeout(() => {
      const response = getBotResponse(input);
      const botResponse = {
        id: messages.length + 2,
        text: response.text,
        sender: 'bot',
        quickReplies: response.quickReplies
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 800);
  };

  const handleQuickReply = (value, text) => {
    const quickReplyMessage = {
      id: messages.length + 1,
      text: text,
      sender: 'user'
    };
    setMessages(prev => [...prev, quickReplyMessage]);
    
    setIsTyping(true);
    
    setTimeout(() => {
      const response = getBotResponse(value);
      const botResponse = {
        id: messages.length + 2,
        text: response.text,
        sender: 'bot',
        quickReplies: response.quickReplies
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 800);
  };

  const suggestedQuestions = [
    { text: "🎓 Admissions", value: "admissions" },
    { text: "📍 Centres", value: "centres" },
    { text: "📅 Prendre RDV", value: "rdv" },
    { text: "📞 Contact", value: "contact" },
    { text: "🏫 Universités", value: "universites" },
    { text: "🇮🇹 Test langue", value: "langue" }
  ];

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/20 border border-white/10 cursor-pointer"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <MessageCircle className="w-5 h-5 text-white" />
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-20 right-6 z-50 w-80 sm:w-96 max-w-full bg-gray-900 rounded-lg shadow-xl border border-gray-700 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">Assistant Italian Dream</h3>
                    <p className="text-xs text-emerald-100">IA • Tout savoir sur nous</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="h-64 sm:h-72 overflow-y-auto p-3 bg-gray-900">
              <div className="space-y-3">
                {messages.map((message) => (
                  <div key={message.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[85%] rounded-lg p-2.5 ${message.sender === 'user'
                          ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                          : 'bg-gray-800 text-gray-100'
                        }`}>
                        <div className="flex items-start gap-2">
                          {message.sender === 'bot' && (
                            <Bot className="w-3.5 h-3.5 mt-0.5 text-green-400 flex-shrink-0" />
                          )}
                          {message.sender === 'user' && (
                            <User className="w-3.5 h-3.5 mt-0.5 text-white flex-shrink-0" />
                          )}
                          <div className="text-xs sm:text-sm whitespace-pre-line leading-relaxed">
                            {message.text}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Quick Replies */}
                    {message.sender === 'bot' && message.quickReplies && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 flex flex-wrap gap-1.5"
                      >
                        {message.quickReplies.map((reply, index) => (
                          <button
                            key={index}
                            onClick={() => handleQuickReply(reply.value, reply.text)}
                            className="px-2.5 py-1.5 text-xs rounded-md bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 border border-gray-700 transition-colors"
                          >
                            {reply.text}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gray-800 rounded-lg p-2.5">
                      <div className="flex items-center gap-2">
                        <Bot className="w-3.5 h-3.5 text-green-400" />
                        <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce" />
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Suggested Questions */}
            <div className="p-2 bg-gray-800 border-t border-gray-700">
              <div className="flex flex-wrap gap-1.5">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(question.value, question.text)}
                    className="px-2.5 py-1.5 text-xs rounded-md bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-600 transition-colors"
                  >
                    {question.text}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-gray-700 bg-gray-900">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Posez votre question..."
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-green-500 placeholder-gray-500"
                />
                <button
                  onClick={handleSend}
                  disabled={isTyping}
                  className={`px-3 py-2 rounded-lg flex items-center justify-center ${isTyping
                      ? 'bg-gray-700 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500'
                    }`}
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;