'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    nextQuestion: number | 'diagnostic';
    diagnostic?: string;
    solution?: string;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "Quelle est la première anomalie que vous observez ?",
    options: [
      {
        text: "La machine ne démarre pas du tout",
        nextQuestion: 2
      },
      {
        text: "La machine fait un bruit anormal",
        nextQuestion: 3
      },
      {
        text: "Un voyant d'erreur est allumé",
        nextQuestion: 4
      },
      {
        text: "La machine fonctionne mais produit des pièces défectueuses",
        nextQuestion: 5
      }
    ]
  },
  {
    id: 2,
    text: "Y a-t-il des voyants allumés sur le tableau de commande ?",
    options: [
      {
        text: "Aucun voyant n'est allumé",
        nextQuestion: 'diagnostic',
        diagnostic: "Problème d'alimentation électrique",
        solution: "1. Vérifiez que la machine est bien branchée\n2. Contrôlez le disjoncteur principal\n3. Vérifiez l'état du câble d'alimentation\n4. Testez la prise électrique avec un autre appareil"
      },
      {
        text: "Le voyant d'alimentation clignote",
        nextQuestion: 'diagnostic',
        diagnostic: "Erreur système au démarrage",
        solution: "1. Notez la séquence de clignotement\n2. Consultez le manuel pour le code d'erreur correspondant\n3. Effectuez un reset complet du système\n4. Contactez le support technique si le problème persiste"
      }
    ]
  },
  // Ajoutez d'autres questions selon la même structure
];

export default function Diagnostic() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [diagnostic, setDiagnostic] = useState<string | null>(null);
  const [solution, setSolution] = useState<string | null>(null);
  const router = useRouter();

  const handleOptionClick = (option: Question['options'][0]) => {
    if (option.nextQuestion === 'diagnostic') {
      setDiagnostic(option.diagnostic || '');
      setSolution(option.solution || '');
    } else {
      setCurrentQuestion(option.nextQuestion);
    }
  };

  const getCurrentQuestion = () => {
    return questions.find(q => q.id === currentQuestion);
  };

  const handleRestart = () => {
    setCurrentQuestion(1);
    setDiagnostic(null);
    setSolution(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-8">
      <div className="max-w-4xl mx-auto">
        {!diagnostic ? (
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              {getCurrentQuestion()?.text}
            </h2>
            <div className="space-y-4">
              {getCurrentQuestion()?.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="w-full text-left p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200"
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Diagnostic</h2>
            <div className="mb-6">
              <h3 className="text-xl font-medium text-blue-800 mb-2">Problème identifié :</h3>
              <p className="text-gray-700">{diagnostic}</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-medium text-blue-800 mb-2">Solution proposée :</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                {solution?.split('\n').map((line, index) => (
                  <p key={index} className="text-gray-700 mb-2">{line}</p>
                ))}
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handleRestart}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Nouveau diagnostic
              </button>
              <button
                onClick={() => router.push('/')}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                Retour à l'accueil
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
} 