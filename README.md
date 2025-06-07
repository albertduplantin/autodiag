# Assistant de Diagnostic Maintenance

Une application web interactive pour aider les agents de maintenance à diagnostiquer les pannes des systèmes automatisés, inspirée par le concept d'Akinator.

## Fonctionnalités

- 🔍 Diagnostic interactif par questions successives
- 📚 Documentation technique intégrée
- 📊 Historique des diagnostics
- 📱 Interface responsive
- 🛠 Solutions détaillées pour chaque problème identifié

## Technologies utilisées

- Next.js 13+ avec App Router
- TypeScript
- Tailwind CSS
- React

## Installation

1. Clonez le repository :
```bash
git clone [URL_DU_REPO]
cd diagnostic
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Structure du projet

```
src/
├── app/
│   ├── page.tsx            # Page d'accueil
│   ├── layout.tsx          # Layout principal
│   ├── globals.css         # Styles globaux
│   ├── diagnostic/         # Module de diagnostic
│   ├── documentation/      # Documentation technique
│   └── historique/        # Historique des diagnostics
```

## Déploiement

L'application peut être déployée sur Vercel ou tout autre hébergeur compatible avec Next.js.

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence

MIT
