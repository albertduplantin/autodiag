'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

interface DocumentationSection {
  titre: string;
  contenu: string[];
}

const documentations: Record<string, DocumentationSection[]> = {
  'perceuse-syderic': [
    {
      titre: 'Description Générale',
      contenu: [
        'La Perceuse Syderic SN14 E est une perceuse à colonne de précision conçue pour les applications industrielles.',
        'Elle permet de réaliser des perçages de haute précision avec une excellente répétabilité.',
      ]
    },
    {
      titre: 'Composants Principaux',
      contenu: [
        'Socle et colonne en fonte stabilisée',
        'Table de travail avec rainures en T',
        'Tête de perçage avec variateur de vitesse',
        'Mandrin de précision',
        'Moteur électrique industriel',
        'Système de transmission par courroies multi-vitesses',
        'Panneau de commande avec affichage digital',
      ]
    },
    {
      titre: 'Points de Contrôle Quotidiens',
      contenu: [
        'Vérification du serrage du mandrin et de l\'état des mors',
        'Contrôle de la tension et de l\'état des courroies',
        'Inspection des dispositifs de sécurité (arrêt d\'urgence, protecteur mandrin)',
        'Vérification des niveaux de lubrification',
        'Test des fins de course et butées',
      ]
    },
    {
      titre: 'Documentation Technique',
      contenu: [
        'Pour une documentation complète, consultez le manuel technique au format PDF.',
        'Le manuel contient les schémas détaillés, les procédures de maintenance et les références des pièces.',
      ]
    },
  ]
};

export default function DocumentationMachine() {
  const params = useParams();
  const machineId = params.machineId as string;
  const documentation = documentations[machineId] || [];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 mr-4"
            >
              ← Retour
            </Link>
            <h1 className="text-3xl font-bold text-blue-900">
              Documentation: {machineId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </h1>
          </div>
          {machineId === 'perceuse-syderic' && (
            <a
              href="/docs/perceuse syderic/perceuse syderic SN14 E documentation.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              Voir le Manuel PDF
            </a>
          )}
        </div>

        {documentation.length > 0 ? (
          <div className="space-y-6">
            {documentation.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  {section.titre}
                </h2>
                <div className="space-y-2">
                  {section.contenu.map((ligne, i) => (
                    <p key={i} className="text-gray-600">
                      {ligne}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-600">
              Documentation en cours de préparation...
            </p>
          </div>
        )}
      </div>
    </main>
  );
} 