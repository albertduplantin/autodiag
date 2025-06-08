'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import TroubleshootingGuide from '@/app/components/TroubleshootingGuide';

export default function GuidePage() {
  const params = useParams();
  const machineId = params.machineId as string;

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 flex items-center">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 mr-4"
          >
            ← Retour
          </Link>
          <h1 className="text-3xl font-bold text-blue-900">
            Guide de Dépannage : {machineId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </h1>
        </div>

        <TroubleshootingGuide />
      </div>
    </main>
  );
} 