'use client';

import Image from 'next/image';

interface MeasurementDiagramProps {
  measurementPoint: number;
}

export default function MeasurementDiagram({ measurementPoint }: MeasurementDiagramProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mb-6">
      <h3 className="text-lg font-semibold mb-4">Point de mesure {measurementPoint}</h3>
      <div className="border-2 border-gray-200 rounded-lg p-4">
        {measurementPoint === 1 && (
          <div>
            <h4 className="font-medium mb-2">Mesure tension d'entrée triphasée</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Utiliser un voltmètre en position VAC</li>
              <li>Mesurer entre chaque phase (L1-L2, L2-L3, L3-L1)</li>
              <li>Valeur attendue : 400V AC ±5%</li>
              <li className="text-red-600">⚠️ DANGER : Tension mortelle, utiliser les EPI appropriés</li>
            </ul>
            <div className="mt-4 p-2 bg-yellow-50 border-l-4 border-yellow-400">
              <p className="text-sm">Points de mesure sur le bornier principal :</p>
              <ul className="list-disc list-inside text-sm mt-2">
                <li>V1 = L1-L2 : 400V AC</li>
                <li>V2 = L2-L3 : 400V AC</li>
                <li>V3 = L3-L1 : 400V AC</li>
              </ul>
            </div>
          </div>
        )}
        
        {measurementPoint === 2 && (
          <div>
            <h4 className="font-medium mb-2">Mesure tension de commande</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Utiliser un voltmètre en position VDC</li>
              <li>Mesurer entre V+ et V- de l'alimentation</li>
              <li>Valeur attendue : 24V DC ±10%</li>
              <li>Vérifier aussi la tension par rapport à la masse (0V)</li>
            </ul>
            <div className="mt-4 p-2 bg-blue-50 border-l-4 border-blue-400">
              <p className="text-sm">Points de test :</p>
              <ul className="list-disc list-inside text-sm mt-2">
                <li>V+ à V- : 24V DC</li>
                <li>V+ à Masse : 24V DC</li>
                <li>V- à Masse : 0V DC</li>
              </ul>
            </div>
          </div>
        )}

        {measurementPoint === 3 && (
          <div>
            <h4 className="font-medium mb-2">Mesure tension moteur</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Utiliser un voltmètre en position VAC</li>
              <li>Mesurer entre les phases du moteur</li>
              <li>Mesure à effectuer pendant la rotation</li>
              <li className="text-red-600">⚠️ ATTENTION : Nécessite deux personnes</li>
            </ul>
            <div className="mt-4 p-2 bg-green-50 border-l-4 border-green-400">
              <p className="text-sm">Points de contrôle :</p>
              <ul className="list-disc list-inside text-sm mt-2">
                <li>Tension équilibrée entre phases</li>
                <li>Absence de fluctuations importantes</li>
                <li>Variation progressive lors des changements de vitesse</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 