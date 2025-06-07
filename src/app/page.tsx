'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">
          Assistant de Diagnostic Maintenance
        </h1>
        
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Bienvenue dans votre assistant de diagnostic
          </h2>
          <p className="text-gray-600 mb-6">
            Cet outil vous guidera pas à pas pour diagnostiquer les pannes de votre système automatisé.
            À travers une série de questions simples, nous vous aiderons à identifier le problème
            et vous proposerons des solutions adaptées.
          </p>
          
          <Link 
            href="/diagnostic"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Commencer le diagnostic
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Documentation</h3>
            <p className="text-gray-600">
              Accédez à la documentation complète du système pour plus d'informations détaillées.
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