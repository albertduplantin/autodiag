'use client';

import { useState } from 'react';

interface SystemInfo {
  title: string;
  description: string;
  checkpoints: string[];
  tools: string[];
  procedures: {
    title: string;
    steps: string[];
  }[];
  warnings?: string[];
}

const systemsData: Record<string, SystemInfo> = {
  'verifications-initiales': {
    title: 'Vérifications Initiales',
    description: 'Première étape de diagnostic avant toute intervention',
    checkpoints: [
      'État général de la machine',
      'Présence tension secteur',
      'Position arrêt d\'urgence',
      'État des voyants',
    ],
    tools: [
      'Voltmètre',
      'Check-list de démarrage',
      'EPI électriques',
    ],
    procedures: [
      {
        title: 'Contrôle Alimentation',
        steps: [
          'Vérifier position sectionneur général',
          'Contrôler tension d\'entrée 400V',
          'Vérifier état des fusibles',
        ]
      },
      {
        title: 'Vérification Sécurités',
        steps: [
          'Contrôler position arrêt d\'urgence',
          'Vérifier fermeture des capots',
          'Contrôler voyants de sécurité',
        ]
      }
    ],
    warnings: [
      'Ne jamais intervenir sous tension sans habilitation',
      'Porter les EPI appropriés',
    ]
  },
  'circuits-electriques': {
    title: 'Circuits Électriques',
    description: 'Diagnostic des circuits de puissance et de commande',
    checkpoints: [
      'Circuit de puissance 400V',
      'Circuit de commande 24V',
      'Variateur de vitesse',
      'Contacteurs et relais',
    ],
    tools: [
      'Voltmètre',
      'Ohmmètre',
      'Schémas électriques',
      'EPI électriques',
    ],
    procedures: [
      {
        title: 'Test Circuit Puissance',
        steps: [
          'Mesurer tensions entre phases',
          'Vérifier équilibrage phases',
          'Contrôler contacteur principal',
        ]
      },
      {
        title: 'Test Circuit Commande',
        steps: [
          'Vérifier alimentation 24V DC',
          'Contrôler chaîne de sécurité',
          'Tester relais et contacteurs',
        ]
      }
    ],
    warnings: [
      'Danger électrique - Tension mortelle',
      'Intervention par personnel habilité uniquement',
    ]
  },
  'partie-mecanique': {
    title: 'Partie Mécanique',
    description: 'Diagnostic des éléments mécaniques',
    checkpoints: [
      'État de la broche',
      'Système de serrage',
      'Transmission',
      'Guidages',
    ],
    tools: [
      'Comparateur',
      'Clés de service',
      'Graisse et lubrifiants',
    ],
    procedures: [
      {
        title: 'Contrôle Broche',
        steps: [
          'Vérifier jeu axial',
          'Contrôler bruit de rotation',
          'Inspecter les roulements',
        ]
      },
      {
        title: 'Vérification Mandrin',
        steps: [
          'Contrôler serrage',
          'Vérifier concentricité',
          'Nettoyer mécanisme',
        ]
      }
    ]
  },
  'securites': {
    title: 'Sécurités',
    description: 'Vérification des dispositifs de sécurité',
    checkpoints: [
      'Arrêt d\'urgence',
      'Capots de protection',
      'Fins de course',
      'Contacteurs de sécurité',
    ],
    tools: [
      'Voltmètre',
      'Check-list sécurité',
      'Schémas électriques',
    ],
    procedures: [
      {
        title: 'Test Arrêt d\'Urgence',
        steps: [
          'Vérifier fonctionnement mécanique',
          'Contrôler circuit électrique',
          'Tester temps de réponse',
        ]
      },
      {
        title: 'Contrôle Protections',
        steps: [
          'Vérifier verrouillage capots',
          'Tester fins de course',
          'Contrôler temps d\'arrêt',
        ]
      }
    ],
    warnings: [
      'Ne jamais désactiver les sécurités',
      'Tester après chaque intervention',
    ]
  }
};

export default function TroubleshootingGuide() {
  const [selectedSystem, setSelectedSystem] = useState<string | null>(null);
  const [expandedProcedure, setExpandedProcedure] = useState<number | null>(null);

  const handleSystemClick = (system: string) => {
    setSelectedSystem(system);
    setExpandedProcedure(null);
  };

  const handleProcedureClick = (index: number) => {
    setExpandedProcedure(expandedProcedure === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Guide de Dépannage Interactif</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {Object.entries(systemsData).map(([key, system]) => (
          <button
            key={key}
            onClick={() => handleSystemClick(key)}
            className={`p-4 rounded-lg shadow-md transition-all ${
              selectedSystem === key
                ? 'bg-blue-600 text-white scale-105'
                : 'bg-white hover:bg-blue-50'
            }`}
          >
            <h3 className="font-semibold text-lg mb-2">{system.title}</h3>
            <p className="text-sm opacity-80">{system.description}</p>
          </button>
        ))}
      </div>

      {selectedSystem && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-6">{systemsData[selectedSystem].title}</h3>
          
          {systemsData[selectedSystem].warnings && (
            <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Avertissements</h4>
              <ul className="list-disc list-inside space-y-1">
                {systemsData[selectedSystem].warnings?.map((warning, index) => (
                  <li key={index} className="text-yellow-700">{warning}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold text-lg mb-3">Points de Contrôle</h4>
              <ul className="list-disc list-inside space-y-2">
                {systemsData[selectedSystem].checkpoints.map((point, index) => (
                  <li key={index} className="text-gray-700">{point}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-3">Outils Nécessaires</h4>
              <ul className="list-disc list-inside space-y-2">
                {systemsData[selectedSystem].tools.map((tool, index) => (
                  <li key={index} className="text-gray-700">{tool}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Procédures de Test</h4>
            <div className="space-y-4">
              {systemsData[selectedSystem].procedures.map((procedure, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  <button
                    onClick={() => handleProcedureClick(index)}
                    className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
                  >
                    <span className="font-medium">{procedure.title}</span>
                    <span>{expandedProcedure === index ? '▼' : '▶'}</span>
                  </button>
                  {expandedProcedure === index && (
                    <div className="p-4 bg-white">
                      <ol className="list-decimal list-inside space-y-2">
                        {procedure.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="text-gray-700">{step}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 