import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileText, CheckCircle, Plane, MapPin, Users, BookOpen, Shield, Award, Sparkles, Flag } from 'lucide-react';

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <Calendar />,
      title: 'Consultation Initiale',
      desc: 'Évaluation de vos objectifs académiques et préparation du plan d\'action personnalisé',
      details: ['Analyse de profil', 'Évaluation linguistique', 'Définition des objectifs', 'Planification budgétaire'],
      color: 'from-green-500 to-emerald-500',
      duration: '1-2 semaines'
    },
    {
      icon: <BookOpen />,
      title: 'Préparation Académique',
      desc: 'Formation linguistique et préparation des documents académiques requis',
      details: ['Cours d\'italien intensif', 'Certification CILS/CELI', 'Traduction documents', 'Équivalence diplômes'],
      color: 'from-white to-gray-100',
      duration: '2-3 mois'
    },
    {
      icon: <FileText />,
      title: 'Dossier d\'Admission',
      desc: 'Constitution et soumission du dossier complet aux universités sélectionnées',
      details: ['Choix des universités', 'Lettre de motivation', 'Recommandations', 'Portfolio académique'],
      color: 'from-red-500 to-rose-500',
      duration: '1 mois'
    },
    {
      icon: <CheckCircle />,
      title: 'Admission Universitaire',
      desc: 'Suivi des candidatures et gestion des lettres d\'acceptation',
      details: ['Suivi des délais', 'Entretiens préparatoires', 'Négociation bourses', 'Acceptation finale'],
      color: 'from-green-600 to-emerald-600',
      duration: '2-4 semaines'
    },
    {
      icon: <Shield />,
      title: 'Procédure Visa',
      desc: 'Assistance complète pour l\'obtention du visa étudiant italien',
      details: ['Dossier visa', 'Assurance santé', 'Preuves financières', 'Rendez-vous ambassade'],
      color: 'from-white to-gray-200',
      duration: '3-4 semaines'
    },
    {
      icon: <Plane />,
      title: 'Pré-départ & Installation',
      desc: 'Préparation au départ et assistance pour l\'installation en Italie',
      details: ['Réservation logement', 'Organisation voyage', 'Ouvrir compte bancaire', 'Inscription universitaire'],
      color: 'from-red-600 to-rose-600',
      duration: '2-3 semaines'
    }
  ];

  const italianColors = {
    green: '#009246',
    white: '#FFFFFF',
    red: '#CE2B37'
  };

  return (
    <div className="pt-24 pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
      
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-green-500/10 via-white/10 to-red-500/10 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{ 
          rotate: [360, 0],
          scale: [1.1, 1, 1.1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-red-500/10 via-white/10 to-green-500/10 rounded-full blur-3xl"
      />

      <section className="container mx-auto px-6 mb-20 relative z-10">
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
              Parcours Italien
            </span>
            <Sparkles className="w-5 h-5 text-yellow-400" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-red-400">
              Processus d'Admission
            </span>
          </h1>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Un chemin <span className="text-white font-semibold italian-gradient">clairement défini</span> de la Tunisie jusqu'à 
            votre salle de classe en Italie. Chaque étape est minutieusement planifiée pour votre succès.
          </p>

          <style jsx>{`
            .italian-gradient {
              background: linear-gradient(to right, ${italianColors.green}, ${italianColors.white}, ${italianColors.red});
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
            .italian-border {
              border-image: linear-gradient(to right, ${italianColors.green}, ${italianColors.white}, ${italianColors.red}) 1;
            }
            .italian-bg {
              background: linear-gradient(135deg, ${italianColors.green}20, ${italianColors.white}20, ${italianColors.red}20);
            }
          `}</style>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveStep(index)}
              className={`relative p-8 rounded-3xl text-left transition-all duration-300 border-2 ${
                activeStep === index
                  ? 'border-white shadow-2xl shadow-green-500/20 bg-gradient-to-br from-gray-900 to-black'
                  : 'glass-card border-transparent hover:border-white/30'
              }`}
            >
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-r from-green-500 via-white to-red-500 flex items-center justify-center">
                <span className="text-black font-bold text-sm">{index + 1}</span>
              </div>

              <div className={`w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br ${step.color} p-1`}>
                <div className="w-full h-full rounded-xl bg-gray-900/90 flex items-center justify-center">
                  <div className="text-2xl text-white">
                    {step.icon}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-bold text-white">Étape {index + 1}</h3>
                <div className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
                  {step.duration}
                </div>
              </div>

              <h4 className="text-2xl font-bold text-white mb-3">{step.title}</h4>
              <p className="text-gray-400 mb-6">{step.desc}</p>

              <div className="space-y-2">
                {step.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-green-400 to-red-400" />
                    <span className="text-sm text-gray-300">{detail}</span>
                  </div>
                ))}
              </div>

              {activeStep === index && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute -bottom-3 left-1/2 transform -translate-x-1/2"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-red-500 rotate-45 transform"></div>
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="italian-bg glass-card rounded-3xl p-10 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-white to-red-500"></div>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-green-500/20 via-white/20 to-red-500/20 flex items-center justify-center">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Étape en Cours</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-green-400 font-semibold">
                        {steps[activeStep].title}
                      </span>
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-4">Nos engagements pour cette étape :</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Suivi quotidien de votre dossier</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Conseiller dédié disponible 24/7</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Garantie de qualité et de transparence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Accès à notre réseau en Italie</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-white mb-6 text-center">Prochaines Échéances</h4>
                <div className="space-y-4">
                  {[
                    { task: 'Documentation à fournir', date: '15 jours', status: 'active' },
                    { task: 'Tests linguistiques', date: '1 mois', status: 'pending' },
                    { task: 'Soumission universités', date: '2 mois', status: 'upcoming' },
                    { task: 'Entretiens préparatoires', date: '3 mois', status: 'upcoming' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          item.status === 'active' ? 'bg-green-500 animate-pulse' : 
                          item.status === 'pending' ? 'bg-yellow-500' : 'bg-gray-500'
                        }`} />
                        <span className="text-gray-300">{item.task}</span>
                      </div>
                      <div className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-red-500/20">
                        <span className="text-white">dans {item.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h4 className="text-xl font-bold text-white mb-2">Suivi en Temps Réel</h4>
                  <p className="text-gray-400">
                    Accédez à l'avancement de votre dossier via notre application mobile
                  </p>
                </div>
                <button className="px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-red-500 text-white font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all flex items-center gap-3">
                  <Sparkles className="w-5 h-5" />
                  Suivre mon parcours
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-full glass-card mb-8 border border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-6 bg-green-500 rounded"></div>
              <div className="w-3 h-6 bg-white rounded"></div>
              <div className="w-3 h-6 bg-red-500 rounded"></div>
            </div>
            <span className="text-white font-semibold text-lg">
              🇮🇹 Votre succès en Italie commence ici 🇮🇹
            </span>
            <div className="flex items-center gap-2">
              <div className="w-3 h-6 bg-red-500 rounded"></div>
              <div className="w-3 h-6 bg-white rounded"></div>
              <div className="w-3 h-6 bg-green-500 rounded"></div>
            </div>
          </div>
        </motion.div>
      </section>

      <motion.div
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-1/3 left-5 w-6 h-6 rounded-full bg-green-400/20 blur-sm"
      />
      <motion.div
        animate={{ 
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/3 right-10 w-8 h-8 rounded-full bg-red-400/20 blur-sm"
      />
    </div>
  );
};

export default Process;