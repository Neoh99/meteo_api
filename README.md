This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
=======
Énoncé du brief

Scénario
Vous êtes développeur web pour le compte d’une agence web. Votre agence a signé un contrat pour le développement d’interfaces météo à destination des usagers du réseau de transport en commun de plusieurs villes de taille moyenne en France. Les écrans seront intégrés aux écrans d’information dans les stations et dans les transports.
Les écrans doivent être programmés avec les technologies web, embarquées dans la webview du système des écrans de la compagnie de transports en commun de la ville.
L’interface ne doit pas inclure de moteur de recherche pour la localisation de l’information météo.
Mais, elle doit inclure un fichier de configuration (JSON par exemple) dans lequel l’information de la ville concernée sera entrée par l’entreprise de transport, et utilisée par votre code pour récupérer les bonnes données météo.

Développer l'application
    Chercher et choisir une API ouverte : OpenWeather
    Créer les différents fichiers nécessaires :
        Fichier HTML (index.html)
        Fichier CSS (style.css)
        Fichier de configuration de la ville (conf.json)
        Fichier Javascript (meteo.js)
    Programmer une récupération des données via l'API
    Déboguer en console afin de valider la procédure
    Intégrer une interface d'affichage de données météo
    Intégrer la mise à jour des données météo toutes les heures

Copyright Orane MERTZ