import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Heart, Star, Target, Globe, Award, Clock, Zap, Sparkles, CheckCircle, Flag } from 'lucide-react';

const Values = () => {
  return (
    <div className="pt-24 pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-500/10 via-white/10 to-red-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-red-500/10 via-white/10 to-green-500/10 rounded-full blur-3xl"
      />

      <section className="container mx-auto px-6 mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card mb-8 border border-green-500/30"
          >
            <Flag className="w-5 h-5 text-green-400" />
            <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-red-400">
              Notre ADN Italien
            </span>
            <Sparkles className="w-5 h-5 text-yellow-400" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-red-400">
              Nos Valeurs Fondamentales
            </span>
          </h1>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Notre différence réside dans notre engagement profond envers chaque étudiant.
            Nous ne sommes pas seulement un service, nous sommes <span className="text-green-400 font-semibold">votre partenaire de réussite</span>.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mb-16"
          >
            {[
              { icon: <Users />, value: '2K+', label: 'Étudiants Satisfaits' },
              { icon: <Clock />, value: '5+', label: 'Années d\'Expérience' },
              { icon: <Globe />, value: '50+', label: 'Villes Italiennes' },
              { icon: <CheckCircle />, value: '98%', label: 'Taux de Réussite' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-4 px-6 py-4 glass-card rounded-xl"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 via-white/20 to-red-500/20 flex items-center justify-center">
                  <div className="text-green-400">{stat.icon}</div>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {[
            {
              icon: <Shield />,
              title: 'Encadrement Intégral',
              desc: 'Nos étudiants sont guidés à chaque étape, jamais abandonnés. Du premier contact à votre installation en Italie.',
              color: 'from-green-500 to-emerald-500',
              features: ['Suivi 24/7', 'Conseiller dédié', 'Support multilingue', 'Plan d\'urgence'],
              testimonial: '"Ils étaient toujours là quand j\'avais besoin d\'aide" - Mohamed, étudiant en médecine'
            },
            {
              icon: <Users />,
              title: 'Accompagnement Proactif',
              desc: 'De la Tunisie jusqu en Italie, notre équipe vous suit et anticipe vos besoins.',
              color: 'from-white to-gray-100',
              features: ['Pré-départ', 'Intégration locale', 'Réseau d\'anciens', 'Événements culturels'],
              testimonial: '"Une vraie famille qui m\'a accueilli à bras ouverts" - Sarah, étudiant en architecture'
            },
            {
              icon: <Heart />,
              title: 'Engagement Absolu',
              desc: 'Votre réussite est notre priorité absolue. Nous croyons en chaque étudiant et investissons dans son succès.',
              color: 'from-red-500 to-rose-500',
              features: ['Garantie de résultat', 'Réactivité immédiate', 'Solutions personnalisées', 'Suivi post-admission'],
              testimonial: '"Ils se battent pour vous comme si c\'était leur propre rêve" - Karim, étudiant en ingénierie'
            },
            {
              icon: <Star />,
              title: 'Excellence Continue',
              desc: 'Nous visons toujours le meilleur pour nos étudiants et améliorons constamment nos services.',
              color: 'from-green-600 to-emerald-600',
              features: ['Formation continue', 'Innovation constante', 'Feedback actif', 'Amélioration permanente'],
              testimonial: '"Des standards de qualité exceptionnels" - Fatma, étudiante en commerce'
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500 rounded-3xl" />
              
              <div className="relative glass-card p-8 rounded-3xl border border-white/10 backdrop-blur-xl h-full">
                <div className="flex items-start gap-6 mb-8">
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-1 flex-shrink-0`}>
                    <div className="w-full h-full rounded-xl bg-gray-900/90 flex items-center justify-center">
                      <div className="text-2xl text-white">
                        {item.icon}
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-2xl border-2 border-transparent border-t-white/30"
                    />
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-white group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:via-white group-hover:to-red-400 transition-all">
                        {item.title}
                      </h3>
                      <Award className="w-5 h-5 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-green-400" />
                    Ce que nous offrons :
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`} />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500/20 via-white/20 to-green-500/20 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 italic">
                        "{item.testimonial}"
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-1 text-sm text-green-400">
                    <span>En savoir plus</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto glass-card rounded-3xl p-12 text-center border border-white/10 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-white/5 to-red-500/5" />
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-r from-green-500/10 via-transparent to-red-500/10 rounded-full"
          />
          
          <div className="relative z-10">
            <div className="flex justify-center gap-6 mb-8">
              {[Shield, Users, Heart, Star, Globe].map((Icon, idx) => (
                <motion.div
                  key={idx}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: idx * 0.2 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 via-white/20 to-red-500/20 flex items-center justify-center"
                >
                  <Icon className="w-6 h-6 text-green-400" />
                </motion.div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-white to-red-400">
                Notre Promesse
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Nous croyons que chaque étudiant mérite une chance égale de réussir à l'international.
              Notre mission va au-delà de l'administration : nous bâtissons des ponts culturels,
              nous créons des opportunités, et nous transformons des vies.
            </p>
            
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500/20 via-white/20 to-red-500/20 border border-green-500/30">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold text-lg">
                Votre rêve italien, notre mission
              </span>
              <Star className="w-5 h-5 text-yellow-400" />
            </div>
          </div>
        </motion.div>
      </section>

      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-1/3 left-10 w-8 h-8 rounded-full bg-green-400/10 blur-sm"
      />
      <motion.div
        animate={{ 
          x: [0, -80, 0],
          y: [0, 60, 0],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, delay: 2 }}
        className="absolute bottom-1/4 right-16 w-10 h-10 rounded-full bg-red-400/10 blur-sm"
      />
    </div>
  );
};

export default Values;