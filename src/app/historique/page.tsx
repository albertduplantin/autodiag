'use client';

import Link from 'next/link';

interface HistoriqueItem {
  date: string;
  probleme: string;
  solution: string;
  status: 'résolu' | 'en_cours' | 'non_résolu';
}

const historiqueData: HistoriqueItem[] = [
  {
    date: '2024-03-15',
    probleme: "Problème d'alimentation électrique",
    solution: "Remplacement du câble d'alimentation défectueux",
    status: 'résolu'
  },
  {
    date: '2024-03-14',
    probleme: "Erreur système au démarrage",
    solution: "Reset complet du système effectué",
    status: 'résolu'
  },
  {
    date: '2024-03-13',
    probleme: "Bruit anormal dans le mécanisme",
    solution: "En attente d'inspection approfondie",
    status: 'en_cours'
  }
];

export default function Historique() {
  const getStatusColor = (status: HistoriqueItem['status']) => {
    switch (status) {
      case 'résolu':
        return 'bg-green-100 text-green-800';
      case 'en_cours':
        return 'bg-yellow-100 text-yellow-800';
      case 'non_résolu':
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">Historique des Diagnostics</h1>
          
          <div className="space-y-4">
            {historiqueData.map((item, index) => (
              <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-semibold text-gray-800">{item.probleme}</h2>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(item.status)}`}>
                    {item.status.replace('_', ' ')}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{item.solution}</p>
                <p className="text-sm text-gray-500">Date : {item.date}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex space-x-4">
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Retour à l'accueil
            </Link>
            <Link
              href="/diagnostic"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              Nouveau diagnostic
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 