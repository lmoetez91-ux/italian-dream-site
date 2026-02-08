import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileText, CheckCircle, Plane, Clock } from 'lucide-react';

const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: 1,
      icon: <Calendar size={24} />,
      title: 'Consultation Initiale',
      description: 'Analyse de votre profil et définition des objectifs',
      duration: '1 semaine',
      details: ['Évaluation académique', 'Discussion des ambitions', 'Plan personnalisé']
    },
    {
      step: 2,
      icon: <FileText size={24} />,
      title: 'Préparation du Dossier',
      description: 'Collecte et organisation des documents nécessaires',
      duration: '2-3 semaines',
      details: ['Traduction des diplômes', 'Lettres de motivation', 'Recommandations']
    },
    {
      step: 3,
      icon: <CheckCircle size={24} />,
      title: 'Admission Universitaire',
      description: 'Soumission des candidatures et suivi',
      duration: '4-8 semaines',
      details: ['Soumission aux universités', 'Préparation entretiens', 'Négociations']
    },
    {
      step: 4,
      icon: <Plane size={24} />,
      title: 'Visa & Départ',
      description: 'Obtention du visa et préparation au départ',
      duration: '3-6 semaines',
      details: ['Dossier visa', 'Assurance santé', 'Recherche logement']
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Votre parcours étape par étape
        </h2>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-1 w-4/5 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 top-8" />
            
            <div className="flex justify-between">
              {steps.map((step, index) => (
                <div key={step.step} className="relative w-1/4">
                  <button
                    onClick={() => setActiveStep(index)}
                    className="relative z-10 mx-auto mb-8"
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      index <= activeStep 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg'
                        : 'glass-card'
                    }`}>
                      <div className={index <= activeStep ? 'text-white' : 'text-gray-400'}>
                        {step.icon}
                      </div>
                    </div>
                  </button>

                  <div className="text-center px-4">
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <div className="flex items-center justify-center gap-1 text-sm mb-2">
                      <Clock size={14} className="text-gray-500" />
                      <span className="text-gray-500">{step.duration}</span>
                    </div>
                    {index === activeStep && (
                      <p className="text-gray-300 text-sm">{step.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className={`p-6 rounded-2xl ${
                index === activeStep 
                  ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/30'
                  : 'glass-card'
              }`}
              onClick={() => setActiveStep(index)}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  index <= activeStep 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500'
                    : 'bg-gray-800'
                }`}>
                  <div className={index <= activeStep ? 'text-white' : 'text-gray-400'}>
                    {step.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-white">{step.title}</h3>
                    <span className="text-sm text-gray-500">{step.duration}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-12">
          <div className="flex justify-between text-gray-400 mb-4">
            <span>Progression</span>
            <span>{Math.round(((activeStep + 1) / steps.length) * 100)}%</span>
          </div>
          <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
              initial={{ width: '0%' }}
              animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;