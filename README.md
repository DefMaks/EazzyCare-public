# EazzyCare

<p align="center">

<img src="https://www.google.com/search?q=https://img.shields.io/badge/Ionic-7.0-3880FF%3Fstyle%3Dflat%26logo%3Dionic" alt="Ionic 7" />

<img src="https://www.google.com/search?q=https://img.shields.io/badge/Angular-16.0-DD0031%3Fstyle%3Dflat%26logo%3Dangular" alt="Angular 16" />

<img src="https://www.google.com/search?q=https://img.shields.io/badge/Supabase-Database-3ECF8E%3Fstyle%3Dflat%26logo%3Dsupabase" alt="Supabase" />

<img src="https://www.google.com/search?q=https://img.shields.io/badge/Capacitor-5.0-119EFF%3Fstyle%3Dflat%26logo%3Dcapacitor" alt="Capacitor" />

</p>

**EazzyCare** est une application mobile innovante destinée à simplifier la mise en relation entre les prestataires de santé et les bénéficiaires. Elle permet une gestion fluide des souscriptions aux services de santé et le suivi des bénéficiaires affiliés.

## 🚀 Fonctionnalités Principales

*   **Mise en relation :** Connecte directement les patients (bénéficiaires) aux prestataires de santé qualifiés.
    
*   **Gestion de profil Bénéficiaire :**
    
    *   Création et gestion de compte.
        
    *   Ajout et gestion de **bénéficiaires affiliés** (membres de la famille, proches) directement depuis le compte principal.
        
*   **Services de Santé :**
    
    *   Consultation des services proposés par les prestataires.
        
    *   Souscription rapide et sécurisée aux services.
        
*   **Tableau de bord :** Visualisation des données et suivi (via Chart.js).
    
*   **Interface Moderne :** Utilisation de sliders interactifs (Swiper, Keen-slider) pour une meilleure expérience utilisateur.
    

## 🛠 Stack Technique

Ce projet est construit avec les technologies suivantes :

*   **Framework Frontend :** [Angular 16](https://angular.io/ "null")
    
*   **Framework UI Mobile :** [Ionic 7](https://ionicframework.com/ "null")
    
*   **Native Runtime :** [Capacitor 5](https://capacitorjs.com/ "null")
    
*   **Base de données & Auth :** [Supabase](https://supabase.com/ "null")
    
*   **Visualisation :** Chart.js
    
*   **Langage :** TypeScript
    

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

*   [Node.js](https://nodejs.org/ "null") (Version recommandée pour Angular 16 : v16 ou v18)
    
*   [Ionic CLI](https://ionicframework.com/docs/intro/cli "null") :
    
        npm install -g @ionic/cli
        
    

## ⚙️ Installation

1.  **Cloner le projet**
    
        git clone [https://github.com/VOTRE_USERNAME/EazzyCare.git](https://github.com/VOTRE_USERNAME/EazzyCare.git)
        cd EazzyCare
        
    
2.  **Installer les dépendances**
    
        npm install
        
    
3.  Configuration de Supabase
    
    Pour que l'application fonctionne, vous devez connecter votre projet Supabase.
    
    Créez ou modifiez le fichier `src/environments/environment.ts` et ajoutez vos clés :
    
        export const environment = {
          production: false,
          supabaseUrl: 'VOTRE_URL_SUPABASE',
          supabaseKey: 'VOTRE_CLE_ANON_PUBLIC'
        };
        
    

## 🏃‍♂️ Démarrage (Développement)

Pour lancer l'application dans votre navigateur avec le rechargement automatique :

    npm start
    # ou la commande standard Ionic
    ionic serve
    

## 📱 Compilation Mobile (Android & iOS)

Ce projet utilise **Capacitor** pour générer les applications natives.

### Préparer le build

    npm run build
    

### Synchroniser avec Capacitor

Cette commande copie les assets web dans les dossiers natifs :

    npx cap sync
    

### Lancer sur Android

    npx cap open android
    

### Lancer sur iOS

    npx cap open ios
    

## 📦 Scripts Disponibles

*   `npm start` : Lance le serveur de développement (`ng serve`).
    
*   `npm run build` : Compile l'application pour la production.
    
*   `npm run watch` : Compile en mode développement et surveille les changements.
    
*   `npm test` : Lance les tests unitaires.
    
*   `npm run lint` : Analyse le code pour détecter les erreurs de style.
    

## 🤝 Contribuer

Les contributions sont les bienvenues !

1.  Forkez le projet
    
2.  Créez votre branche (`git checkout -b feature/AmazingFeature`)
    
3.  Commitez vos changements (`git commit -m 'Add some AmazingFeature'`)
    
4.  Push vers la branche (`git push origin feature/AmazingFeature`)
    
5.  Ouvrez une Pull Request
    

## 📄 Licence

Distribué sous la licence MIT. Voir `LICENSE` pour plus d'informations.

## 👤 Auteur

**DefMaks**

*   Site web : [https://defmaks.com/](https://defmaks.com/ "null")
    

_Généré pour le projet EazzyCare v0.0.1_
