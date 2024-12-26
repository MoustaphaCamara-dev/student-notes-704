# Student Notes 704

Une application de prise de notes basée sur React, conçue pour aider les étudiants à gérer efficacement leurs notes académiques.

## Fonctionnalités

- Création, modification et suppression de notes
- Organisation des notes par matières/catégories
- Synchronisation en temps réel avec Firebase
- Design responsive pour tous les appareils
- Authentification utilisateur

## Technologies Utilisées

- React.js
- Firebase (Authentification & Firestore)
- React Router
- Bootstrap/Material-UI pour le style

## Pour Commencer

1. Cloner le dépôt :
```bash
git clone https://github.com/MoustaphaCamara-dev/student-notes-704.git
```

2. Installer les dépendances :
```bash
cd student-notes-704
npm install
```

3. Configurer votre configuration Firebase dans `src/firebase.js`

4. Démarrer le serveur de développement :
```bash
npm start
```

## Structure du Projet

```
student-notes-704/
├── src/
│   ├── components/     # Composants réutilisables
│   ├── pages/         # Composants de pages
│   ├── firebase.js    # Configuration Firebase
│   ├── App.jsx        # Composant principal de l'application
│   └── index.js       # Point d'entrée de l'application
└── README.md
```

## Contribution

N'hésitez pas à soumettre des issues et des demandes d'amélioration.

## Licence

Ce projet est sous licence MIT.

## Améliorations Futures
Implémentation de l'authentification Firebase.
Ajout d'un mode sombre.
Ajout de fonctionnalités comme la recherche et les catégories de notes.
Support hors ligne avec IndexedDB.

## Auteur
Créé par Moustapha Camara
GitHub : MoustaphaCamara-dev
