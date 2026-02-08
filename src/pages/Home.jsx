import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Shield, Users, CheckCircle, Target, Award, BookOpen, ArrowRight, Home, DollarSign, Languages, Smartphone, FileCheck, Bell, CreditCard, Flag, Sparkles, Eye, Clock, TrendingUp, ShieldCheck, Calendar, Download, FileText } from 'lucide-react';
import Hero from '../components/Hero';
import ProcessTimeline from '../components/ProcessTimeline';

const HomePage = () => {
  return (
    <div>
      <Hero />
      
      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card mb-8 border border-green-500/30"
            >
              <Flag className="w-5 h-5 text-green-400" />
              <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-red-400">
                Notre Mission
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-red-400">
                Qui Nous Sommes
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Italien Dream - Votre cabinet d'accompagnement pour réussir vos études en Italie
            </p>
            
            <div className="glass-card rounded-3xl p-8 text-left mb-12 border border-white/10">
              <p className="text-gray-300 text-lg mb-6">
                <strong>Depuis ses origines, Italien Dream s'inscrit dans les principes de l'accompagnement et la réalisation des projets de ces clients.</strong>
              </p>
              <p className="text-gray-400 mb-6">
                Italien Dream, pilote dans le cadre de la migration des étudiants en Italie, le centre encadre ces adhérents sur la démarche d'apprentissage de la langue italienne ainsi que le cursus du dépôt des dossiers auprès des universités.
              </p>
              <p className="text-gray-400">
                Italien Dream a toujours eu l'ambition d'innover au service des apprenants en s'investissant sur plusieurs dimensions de l'innovation : pédagogique évidemment, mais aussi technologique (numérisation des processus de dépôt de dossier et suivi via application mobile).
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl border border-green-500/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20">
                  <Target className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Nos Ambitions</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Encadrement des bacheliers ou universitaires pour la réussite future",
                  "Accompagnement des étudiants pour l'intégration en Italie",
                  "Faciliter le processus de l'obtention de la certification de la langue italienne",
                  "Meilleur choix de son avenir, en choisissant les bonnes écoles/universités",
                  "Réussir les bonnes démarches pour l'obtention du visa d'étude"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl border border-red-500/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-r from-red-500/20 to-rose-500/20">
                  <Award className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Nos Valeurs</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Centre pilote dans la formation de langue italienne",
                  "L'accompagnement sur le choix des études",
                  "Faciliter l'intégration dans les différentes universités",
                  "Faciliter les procédures et démarches d'obtention d'un visa d'étude",
                  "Équipe de formateurs et gestionnaires de dossier disponible pour votre réussite"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Italy */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card mb-8 border border-white/20">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-red-400">
                🇮🇹 Excellence Italienne 🇮🇹
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-red-400">
                Pourquoi choisir l'Italie ?
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <GraduationCap />,
                  title: 'Éducation de qualité',
                  desc: 'Universités classées parmi les meilleures en Europe'
                },
                {
                  icon: <Shield />,
                  title: 'Diplôme reconnu',
                  desc: 'Valable dans toute l Union Européenne'
                },
                {
                  icon: <Users />,
                  title: 'Culture riche',
                  desc: 'Art, gastronomie et histoire italienne'
                },
                {
                  icon: <CheckCircle />,
                  title: 'Coût abordable',
                  desc: 'Excellent rapport qualité-prix'
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 rounded-3xl text-center border border-white/10 hover:border-green-500/30 transition-colors"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-green-500/20 via-white/20 to-red-500/20 flex items-center justify-center">
                    <div className={`text-green-400 ${index === 2 ? 'text-white' : ''} ${index === 3 ? 'text-red-400' : ''}`}>
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Formation de Langue Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="glass-card rounded-3xl p-8 border border-white/10">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-2/3">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20">
                      <Languages className="w-8 h-8 text-green-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-emerald-400">
                        Formation de Langue Italienne
                      </span>
                    </h2>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-6">
                    <strong>Dispositif proposé par le centre, permet aux bénéficiaires de suivre un parcours de formation individualisé ou avec un groupe afin de construire :</strong>
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-4">
                      <ul className="space-y-3">
                        {[
                          "Son projet professionnel",
                          "Suivre la démarche d'obtention d'une certification de la langue italienne",
                          "Choisir l'école pour finir les études universitaires",
                          "Connaître ses droits lors de l'intégration en Italie"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Niveaux proposés</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { level: "A1", desc: "Débutant" },
                          { level: "A2", desc: "Élémentaire" },
                          { level: "B1", desc: "Intermédiaire" },
                          { level: "B2", desc: "Avancé" },
                          { level: "C1", desc: "Autonome" },
                          { level: "C2", desc: "Maîtrise" }
                        ].map((item, index) => (
                          <div key={index} className="p-3 rounded-lg bg-gradient-to-r from-green-500/5 via-white/5 to-red-500/5 border border-white/10">
                            <div className="text-lg font-bold text-white">{item.level}</div>
                            <div className="text-sm text-gray-400">{item.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/3">
                  <div className="bg-gradient-to-br from-green-500/10 via-white/10 to-red-500/10 p-6 rounded-2xl border border-white/20">
                    <h4 className="text-xl font-bold text-white mb-4 text-center">
                      Certifications Préparées
                    </h4>
                    <div className="space-y-4">
                      {[
                        "CELI (Certificat de Connaissance de la Langue Italienne)",
                        "CILS (Certificat d'Italien comme Langue Étrangère)",
                        "PLIDA (Projet Langue Italienne Dante Alighieri)",
                        "Certification universitaire"
                      ].map((cert, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                          <div className={`w-2 h-2 rounded-full ${index % 3 === 0 ? 'bg-green-400' : index % 3 === 1 ? 'bg-white' : 'bg-red-400'}`}></div>
                          <span className="text-gray-300">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bourse d'étude Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="glass-card rounded-3xl p-8 border border-white/10">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-2/3">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-yellow-500/20 to-amber-500/20">
                      <DollarSign className="w-8 h-8 text-yellow-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400">
                        Bourse d'étude
                      </span>
                    </h2>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-6">
                    <strong>Italien Dream vous accompagne dans la démarche de l'obtention d'une bourse d'étude, un autre processus qui peut faciliter l'intégration des demandeurs.</strong>
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Nos services pour les bourses</h3>
                      <ul className="space-y-3">
                        {[
                          "Accompagnement complété pour les demandes de bourse",
                          "Information sur les bourses disponibles",
                          "Aide à la préparation des dossiers de candidature",
                          "Conseils pour les entretiens et les lettres de motivation"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Avantages des bourses</h3>
                      <ul className="space-y-3">
                        {[
                          "Réduction des frais de scolarité",
                          "Allocation mensuelle pour les études",
                          "Accès au logement étudiant",
                          "Couverture des frais de transport",
                          "Accès aux services universitaires"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5" />
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/3">
                  <div className="bg-gradient-to-br from-yellow-500/10 to-amber-500/10 p-6 rounded-2xl border border-yellow-500/30">
                    <h4 className="text-xl font-bold text-white mb-4 text-center">
                      Types de bourses disponibles
                    </h4>
                    <div className="space-y-4">
                      {[
                        "Bourses gouvernementales italiennes",
                        "Bourses universitaires",
                        "Bourses d'excellence",
                        "Bourses pour étudiants internationaux",
                        "Bourses de recherche"
                      ].map((type, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-yellow-500/5">
                          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                          <span className="text-gray-300">{type}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Foyer/Logement Section - MOVED BEFORE APP */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="glass-card rounded-3xl p-8 border border-white/10">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3">
                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 rounded-2xl border border-blue-500/30 h-full">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                        <Home className="w-10 h-10 text-blue-400" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        Assistance Foyer
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Nous vous aidons avec les documents de foyer
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                      <Home className="w-8 h-8 text-blue-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                        Assistance Documents de Foyer
                      </span>
                    </h2>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-6">
                    <strong>Italien Dream vous assiste dans la préparation des documents nécessaires pour votre foyer en Italie.</strong>
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Documents assistés</h3>
                      <ul className="space-y-3">
                        {[
                          "Attestation d'hébergement",
                          "Contrat de location",
                          "Documents de résidence",
                          "Certificat de domicile",
                          "Attestation d'inscription au registre"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5" />
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Notre aide</h3>
                      <ul className="space-y-3">
                        {[
                          "Préparation des formulaires",
                          "Traduction des documents",
                          "Vérification des pièces requises",
                          "Soumission aux autorités",
                          "Suivi des démarches"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5" />
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Mobile Section - NOW AFTER FOYER */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="glass-card rounded-3xl p-8 border border-white/10">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-indigo-500/10 p-8 rounded-2xl border border-white/30 text-center">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 flex items-center justify-center">
                        <Smartphone className="w-12 h-12 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-2">
                        Italian Dream App
                      </h4>
                      <p className="text-gray-400 mb-4">
                        Suivi intelligent de votre dossier
                      </p>
                      
                      {/* Coming Soon Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
                        <Clock className="w-4 h-4 text-white" />
                        <span className="text-white text-sm font-semibold">Disponible Très Bientôt</span>
                      </div>
                      
                      <div className="text-sm text-gray-400 italic">
                        "Rendre votre parcours plus simple et transparent"
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                      <Smartphone className="w-8 h-8 text-purple-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                        L'App qui Simplifie Votre Parcours
                      </span>
                    </h2>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-6">
                    <strong>Dites adieu au stress et aux appels incessants ! Notre application mobile vous permet de suivre chaque étape de votre dossier en temps réel, avec une transparence totale.</strong>
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Suivi Intelligent de Votre Dossier</h3>
                      <ul className="space-y-3">
                        {[
                          {
                            icon: <Eye className="w-5 h-5 text-green-400" />,
                            text: "Voir en direct si votre dossier est envoyé, en traitement, accepté ou refusé"
                          },
                          {
                            icon: <FileCheck className="w-5 h-5 text-blue-400" />,
                            text: "Statut détaillé de chaque université contactée"
                          },
                          {
                            icon: <ShieldCheck className="w-5 h-5 text-purple-400" />,
                            text: "Notifications instantanées des changements de statut"
                          },
                          {
                            icon: <TrendingUp className="w-5 h-5 text-pink-400" />,
                            text: "Progression visuelle de votre parcours étape par étape"
                          }
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            {item.icon}
                            <span className="text-gray-300">{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Gestion Simplifiée</h3>
                      <ul className="space-y-3">
                        {[
                          {
                            icon: <CreditCard className="w-5 h-5 text-green-400" />,
                            text: "Voir exactement les montants à payer et échéances"
                          },
                          {
                            icon: <Bell className="w-5 h-5 text-yellow-400" />,
                            text: "Rappels automatiques des paiements et délais"
                          },
                          {
                            icon: <FileText className="w-5 h-5 text-red-400" />,
                            text: "Accès à tous vos documents numérisés"
                          },
                          {
                            icon: <Calendar className="w-5 h-5 text-blue-400" />,
                            text: "Calendrier personnalisé avec toutes vos dates importantes"
                          }
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            {item.icon}
                            <span className="text-gray-300">{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-2xl border border-purple-500/20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Disponible très bientôt !</h4>
                        <p className="text-gray-400 text-sm">
                          Nous travaillons activement sur cette innovation pour rendre votre expérience avec Italian Dream encore plus simple et efficace. Soyez parmi les premiers à être notifié !
                        </p>
                      </div>
                      <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white text-sm font-medium flex items-center gap-2">
                        <Bell className="w-4 h-4" />
                        Être notifié
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="glass-card p-8 rounded-3xl text-center border border-green-500/20">
              <div className="text-4xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
                5+
              </div>
              <div className="text-gray-400">Années d'expérience</div>
            </div>

            <div className="glass-card p-8 rounded-3xl text-center border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">2000+</div>
              <div className="text-gray-400">Étudiants guidés</div>
            </div>

            <div className="glass-card p-8 rounded-3xl text-center border border-red-500/20">
              <div className="text-4xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-rose-400">
                98%
              </div>
              <div className="text-gray-400">Taux de réussite</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-6 justify-center mb-16">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white font-semibold text-lg hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300 flex items-center gap-3"
              >
                <ArrowRight className="w-5 h-5" />
                Commencer mon parcours
              </motion.button>
            </Link>
            
            <Link to="/universities">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass-card rounded-xl text-white font-semibold text-lg border border-white/30 hover:border-green-400 transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  <GraduationCap size={24} />
                  Explorer les universités
                </span>
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* App Download Section - UPDATED */}
      <section id="app-download" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto glass-card rounded-3xl p-12 text-center border border-white/10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6 mx-auto">
              <Clock className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-semibold">Disponible Très Bientôt</span>
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-6">
              Préparez-vous pour l'Application Italian Dream
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Bientôt disponible ! Suivez votre dossier d'études en Italie en temps réel, gérez vos paiements et recevez des notifications instantanées.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl text-gray-300 font-semibold text-lg flex items-center gap-3 cursor-not-allowed opacity-70">
                <Smartphone className="w-5 h-5" />
                Bientôt sur l'App Store
              </button>
              <button className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl text-gray-300 font-semibold text-lg flex items-center gap-3 cursor-not-allowed opacity-70">
                <Smartphone className="w-5 h-5" />
                Bientôt sur Google Play
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-6 italic">
              L'application est en cours de développement pour vous offrir la meilleure expérience possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto glass-card rounded-3xl p-12 text-center border border-white/10"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Prêt à transformer votre rêve italien en réalité ?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Réservez votre consultation gratuite et laissez nos experts vous guider 
              pas à pas vers votre avenir académique en Italie.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white font-semibold text-lg hover:shadow-xl hover:shadow-green-500/25 transition-all flex items-center gap-3 mx-auto"
              >
                <BookOpen className="w-5 h-5" />
                Réserver une consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;