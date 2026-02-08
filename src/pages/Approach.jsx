import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, BookOpen, Shield, Sparkles, Zap, TrendingUp, CheckCircle, Globe, BarChart, Lightbulb, Heart, Flag } from 'lucide-react';

const Approach = () => {
  return (
    <div className="pt-24 pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-green-500/10 via-white/10 to-red-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-red-500/10 via-white/10 to-green-500/10 rounded-full blur-3xl"
      />

      <section className="container mx-auto px-6 mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card mb-8 border border-green-500/30"
          >
            <Flag className="w-5 h-5 text-green-400" />
            <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-red-400">
              Approche Italienne
            </span>
            <Sparkles className="w-5 h-5 text-yellow-400" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-red-400">
              Notre Approche
            </span>
          </h1>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Nous combinons expertise humaine et technologie de pointe pour créer 
            <span className="text-green-400 font-semibold"> des parcours d'études personnalisés</span> 
            qui transforment vos ambitions en réalité.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-8 px-8 py-4 glass-card rounded-2xl mb-12 border border-green-500/20"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white flex items-center gap-2">
                <Zap className="w-6 h-6 text-yellow-400" />
                100%
              </div>
              <div className="text-sm text-gray-400">Satisfaction</div>
            </div>
            <div className="h-8 w-px bg-gradient-to-b from-transparent via-green-500/50 to-transparent" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-emerald-400" />
                24/7
              </div>
              <div className="text-sm text-gray-400">Disponibilité</div>
            </div>
            <div className="h-8 w-px bg-gradient-to-b from-transparent via-red-500/50 to-transparent" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-white" />
                360°
              </div>
              <div className="text-sm text-gray-400">Accompagnement</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <Users />,
              title: 'Accompagnement Personnalisé',
              desc: 'Chaque étudiant bénéficie d un suivi individuel adapté à ses besoins spécifiques',
              features: ['Coach dédié', 'Plan sur-mesure', 'Suivi régulier'],
              color: 'from-green-500 to-emerald-500'
            },
            {
              icon: <Target />,
              title: 'Orientation Stratégique',
              desc: 'Sélection intelligente des universités selon vos capacités et ambitions',
              features: ['Analyse de profil', 'Matching universitaire', 'Plan B intégré'],
              color: 'from-white to-gray-100'
            },
            {
              icon: <BookOpen />,
              title: 'Préparation Complète',
              desc: 'De la certification linguistique aux dossiers administratifs complexes',
              features: ['Formation langue', 'Prépa dossier', 'Simulation entretien'],
              color: 'from-red-500 to-rose-500'
            },
            {
              icon: <Shield />,
              title: 'Sécurité Garantie',
              desc: 'Notre réseau étendu assure la légitimité et la réussite de chaque admission',
              features: ['Partenaire officiel', 'Contrat sécurisé', 'Support juridique'],
              color: 'from-green-600 to-emerald-600'
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-30 blur transition duration-500 group-hover:duration-200 animate-tilt rounded-3xl" />
              
              <div className="relative glass-card p-8 rounded-3xl border border-white/10 backdrop-blur-xl">
                <div className={`relative w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.color}/20 p-1`}>
                  <div className="w-full h-full rounded-xl bg-gray-900/80 flex items-center justify-center">
                    <div className={`text-3xl bg-clip-text text-transparent bg-gradient-to-r ${item.color}`}>
                      {item.icon}
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-2xl border-2 border-transparent border-t-white/30"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:via-white group-hover:to-red-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-6 text-center leading-relaxed">
                  {item.desc}
                </p>

                <div className="space-y-3">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent group-hover:w-3/4 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-card rounded-3xl p-12 text-center border border-white/10 backdrop-blur-xl"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <Heart className="w-8 h-8 text-red-400" />
            <Lightbulb className="w-8 h-8 text-yellow-400" />
            <Globe className="w-8 h-8 text-green-400" />
            <BarChart className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-red-400">
              Notre Philosophie
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Nous croyons que chaque étudiant mérite une chance de briller sur la scène internationale.
            Notre mission est de transformer les barrières linguistiques et administratives en tremplins
            vers l'excellence académique.
          </p>
          
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 via-white/20 to-red-500/20 border border-green-500/30">
            <Flag className="w-5 h-5 text-green-400" />
            <span className="text-white font-semibold">
              Excellence • Innovation • Confiance • Résultats
            </span>
            <Flag className="w-5 h-5 text-red-400" />
          </div>
        </motion.div>
      </section>

      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-1/4 left-10 w-4 h-4 rounded-full bg-green-400/20 blur-sm"
      />
      <motion.div
        animate={{ 
          x: [0, -80, 0],
          y: [0, -60, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/4 right-20 w-6 h-6 rounded-full bg-red-400/20 blur-sm"
      />
    </div>
  );
};

export default Approach;