# Niveau 1 - Définir une story

On veut évaluer ta capacité à définir une story complète pour ton équipe de développeurs, avec suffisamment de détails pour qu’elle puisse être mise en œuvre directement.

Tu es Product Manager chez Google Flights et tu dois définir la story des filtres dans le parcours de recherche.  
Une étude utilisateur a été menée, et l’interface est prête : https://www.google.fr/flights/.

L’objectif est de définir la user story pour filtrer les résultats de recherche de vols dans Google Flights, de manière à pouvoir la transmettre directement à ton équipe de développeurs.

## Attendus
- une story prête à être transmise au dev
- compétences rédactionnelles
- fichier Markdown, PDF ou TXT (le modèle fourni utilise la syntaxe Markdown)

Tu peux utiliser n’importe quel outil d’IA pour t’aider à accélérer la rédaction ou obtenir des informations complémentaires. Si tu le fais, précise quel outil tu as utilisé, à quelles fins et quels bénéfices tu en as tirés.

## Temps requis

2h

## Modèle

Voici un modèle de story complète. Toutes les sections ne sont pas obligatoires : tu peux choisir celles qui sont pertinentes et nécessaires pour ta story.


	## 1. Contexte métier
	 
	### 1.1 Description
	Décris le contexte, le problème à résoudre et/ou les opportunités de marché à exploiter et/ou la valeur ajoutée par la mise en œuvre de cette story.

	### 1.2 Cas d’utilisation
	Liste un ou plusieurs cas d’utilisation que cette story doit couvrir.
	 
	### 1.3 User Story
	Définis la fonctionnalité avec une ou plusieurs user stories, en précisant la ou les valeurs ajoutées. 
	En tant que ____, je veux ____ afin de _____.

	### 1.4 KPI
	Définit les KPI, OKR ou indicateurs permettant d’évaluer le succès de cette story.
	 
	## 2. Description
	 
	### 2.1 Règles métier
	Définis toutes les règles de cette story (selon les rôles utilisateurs, les combinaisons de critères, l’affichage par défaut, etc.).
	 
	### 2.2 Parcours utilisateur
	Définis les étapes que l’utilisateur doit suivre pour accomplir sa tâche.
	 
	### 2.3 Attentes UI
	Décris tous les comportements de l’interface selon les règles métier et le parcours utilisateur.
	 
	### 2.4 Cas d’erreur
	Définis toutes les erreurs possibles, la manière de les signaler à l’utilisateur et la réponse de l’application en cas d’erreur.
	 
	### 2.5 Definition of Ready
	Liste ce qui doit être prêt avant de commencer le développement.
	
	### 2.6 Tests fonctionnels
	Définis les scénarios fonctionnels que ton ou tes développeur(s) doivent implémenter pour mettre en place cette fonctionnalité.
	Tu peux utiliser la syntaxe Gherkin (https://docs.behat.org/en/v2.5/guides/1.gherkin.html, https://cucumber.io/docs/gherkin/reference/)

	### Exemple de test fonctionnel

	```feature
	Fonctionnalité : Texte bref et descriptif de ce qui est souhaité
	  Afin de réaliser une valeur métier identifiée
	  En tant qu’acteur explicite du système
	  Je veux obtenir un bénéfice qui permet d’atteindre l’objectif
	  
	  Contexte : Étant donné que...

	  Scénario : Situation métier identifiable
	    Étant donné une condition préalable
	     Quand un acteur réalise une action
	      Et une autre action
	     Alors un résultat vérifiable est obtenu
	      Et quelque chose d’autre se produit aussi

	  Scénario : Une situation différente
	      ...```

	## 3. Plan d’action
	Liste les actions à réaliser par ton ou tes développeur(s) pour livrer cette story.
	 
	## 4. Critères d’acceptation
	- [ ] En tant qu’utilisateur, je peux ...
	 
	## 5. Definition of Done
	- [ ] C’est terminé ...
