>Machine Learning INFO5 2024-2025 **ISPM**
# QUICKSILVER 🤖

# Thème : Traitement-Automatique-Langage-Naturel

## Institut Supérieur Polytechnique de Madagascar : http://www.ispm-edu.com/
Membre de l'équipe (IGGLIA 5) et le rôle respectif de chacun: 
  * **RANDRIANOELINA Liantsoa Harimisa                       ,n°14** : chargé de la recherche du dataset et nettoyage des données + déploiement.
  * **ZAFIARISON Koloina Emile                               ,n°16** : chargé de l'intégration front et développement endpoint pour faire la prédiction + déploiement.
  * **RANDIMBINIRINA RAKOTOMANANA Yusha Andry Ny Aina        ,n°19** : chargé du développement du pipeline de pré-traitement des textes + déploiement.
  * **RASOLONJATOVO Zo Heriniaina                            ,n°23** : chargé de l'entrainement du modèle et les tests  + déploiement.

## ⚒️ Stack Technologique :
  * Front : Next js

    Choisi pour sa rapidité et sa flexibilité dans la création d’interfaces web modernes et réactives.
    Permet d’afficher les résultats de la détection de spam/ham en temps réel et d’offrir une expérience utilisateur fluide.

  * Modèle ML : Python

    Nous avons choisi Python car c'etait imposé et de plus il fournit déjà des bibliothèques qui facilitent et optimisent l'implémentation et la performance du modèle.
   
  * Backend : Django

    Utilisé pour gérer la logique serveur,la communication entre le front-end et le modèle de machine learning.
    Permet de faciliter le déploiement de l’application.

## ⚙️ Description du processus :
   * PIPELINE DE PRE-TRAITEMENT : TF-IDF et N-GRAM (Bigram)

Nous avons choisi d’utiliser TF-IDF plutôt que Bag-of-Words car elle met davantage en valeur les mots rares et discriminants tout en réduisant l’influence des mots fréquents et peu informatifs.
Nous avons également utilisé des bigrammes afin de capturer non seulement les mots individuels, mais aussi les combinaisons de deux mots consécutifs, ce qui permet au modèle de mieux identifier les expressions typiques du spam et d’améliorer la précision de la classification.

## 🔁 Méthode ML et modèle : RANDOM FOREST 
Nous avons initialement utilisé Logistic Regression, car elle réduit le risque de surapprentissage sur un petit dataset. Cependant, après comparaison des résultats, nous avons opté pour Random Forest, car elle permet de réduire les faux négatifs, rendant le modèle plus fiable pour la détection des messages spam. Par conséquent, nous avons entraîné une instance de Random Forest qui constitue le modèle concret utilisé pour prédire si un message est spam ou non.


## 📊 Datasets Utilisés : 
On a récupéré notre dataset sur HuggingFace (https://huggingface.co/datasets/dbarbedillo/SMS_Spam_Multilingual_Collection_Dataset), mais il était multilingue, donc on a seulement récupéré les colonnes des textes en français ainsi que le label qui détecte si le texte est un ham ou spam. 

## 🌐 Lien vers l’application web hébergée : https://frontent-tp-machine-learning-30-01.vercel.app/
## 🌐 Lien vers le Back-End de l'application : https://github.com/HeriniainaRas/Backend-Automatic-Processing-Natural-Language
