>Machine Learning INFO5 2024-2025 **ISPM**
# QUICKSILVER 🤖

# Traitement-Automatique-Langage-Naturel

## Institut Supérieur Polytechnique de Madagascar : http://www.ispm-edu.com/
Membre de l'équipe (IGGLIA 5) : 
  * RANDRIANOELINA Liantsoa Harimisa, n°14
  * ZAFIARISON Koloina Emile, n°16
  * RANDIMBINIRINA RAKOTOMANANA Yusha Andry Ny Aina, n°19
  * RASOLONJATOVO Zo Heriniaina, n°23

## Stack Technologique :

## Description du processus et du modèle :
   * PIPELINE DE PRE-TRAITEMENT : TF-IDF
    
   * MODELE ML CHOISI: LOGISTIC REGRESSION
Nous avons choisi d’utiliser TF-IDF combiné à la régression logistique car :
         - moins de risque de surapprentissage par rapport à d'autres modèles(Random Forest) sur un petit dataset.
         - cette approche est rapide à entraîner
         - efficace pour des textes courts comme les SMS

## Méthode ML :

## Datasets Utilisés : 
On a récupéré notre dataset sur HuggingFace (https://huggingface.co/datasets/dbarbedillo/SMS_Spam_Multilingual_Collection_Dataset), mais il était multilingue, donc on a seulement récupéré les colonnes des textes en français ainsi que le label qui détecte si le texte est un ham ou spam. 

## lien vers l’application web hébergée : 
