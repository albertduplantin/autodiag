'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Machine {
  id: string;
  nom: string;
  description: string;
  documentation: {
    pdf?: string;
  };
}

const machines: Machine[] = [
  {
    id: 'perceuse-syderic',
    nom: 'Perceuse Syderic SN14 E',
    description: 'Perceuse à colonne de précision pour les travaux industriels.',
    documentation: {
      pdf: '/docs/perceuse syderic/perceuse syderic SN14 E documentation.pdf'
    }
  },
  // D'autres machines seront ajoutées ici
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">
          Assistant de Diagnostic Maintenance
        </h1>
        
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Sélectionnez une machine
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {machines.map((machine) => (
              <div key={machine.id} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{machine.nom}</h3>
                <p className="text-gray-600 mb-4">{machine.description}</p>
                <div className="flex flex-wrap gap-2">
                  <Link 
                    href={`/diagnostic/${machine.id}`}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Diagnostic
                  </Link>
                  <Link 
                    href={`/documentation/${machine.id}`}
                    className="inline-block bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  >
                    Documentation
                  </Link>
                  {machine.documentation.pdf && (
                    <a 
                      href={machine.documentation.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                    >
                      Manuel PDF
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Documentation Générale</h3>
            <p className="text-gray-600">
              Accédez à la documentation complète de toutes les machines.
            </p>
            <Link 
              href="/documentation"
              className="inline-block mt-4 text-blue-600 hover:text-blue-800"
            >
              Consulter la documentation →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Historique</h3>
            <p className="text-gray-600">
              Consultez l'historique des diagnostics précédents et des solutions appliquées.
            </p>
            <Link 
              href="/historique"
              className="inline-block mt-4 text-blue-600 hover:text-blue-800"
            >
              Voir l'historique →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 