'use client';

import Link from 'next/link';

export default function Documentation() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">Documentation du Système</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Vue d'ensemble du système</h2>
              <p className="text-gray-600 mb-4">
                Cette documentation fournit une vue détaillée du système automatisé et de ses composants principaux.
                Elle est conçue pour aider les agents de maintenance à comprendre le fonctionnement du système
                et à résoudre les problèmes courants.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Composants principaux</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Unité de contrôle centrale</li>
                <li>Système d'alimentation</li>
                <li>Capteurs et actionneurs</li>
                <li>Interface utilisateur</li>
                <li>Système de sécurité</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Maintenance préventive</h2>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-xl font-medium mb-2 text-blue-800">Points de contrôle quotidiens :</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Vérification des voyants d'état</li>
                  <li>Contrôle des niveaux de fluides</li>
                  <li>Inspection visuelle des composants critiques</li>
                  <li>Test des arrêts d'urgence</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contacts utiles</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 mb-2">Support technique : 0800 123 456</p>
                <p className="text-gray-600 mb-2">Email support : support@systeme-auto.com</p>
                <p className="text-gray-600">Urgence maintenance : 0800 789 012</p>
              </div>
            </section>
          </div>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 