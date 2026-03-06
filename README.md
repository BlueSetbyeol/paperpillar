# Reproduction d'une page

Le but de ce projet est de reproduire fidèlement une page proposé par le site Bumble.
Le projet soit suivre la ligne éditorial et la D.A. de la page sélectionné en utilisant Tailwind.

Aucun Framework n'a été imposé pour la réalisation du code en lui-même.

Page sélectionné : [Paperpillar](https://dribbble.com/shots/24670637-Free-UI-Kit-E-Commerce-Landing-Page)

Accès donné à [Figma](https://www.figma.com/community/file/1404661035724908923/e-commerce-website-ui-kit-paperpillar) par l'auteur d'origine Paperpillar.

Projet réalisé en : **React JS + Vite** et **Tailwind CSS**

## Présentation du projet

La page réalisé par Paperpillar a été selectionné pour sa simplicité de design et sa diversité d'éléments utilisés : images, textes, interaction avec l'utilisateur (button, select, input).

De plus la page reproduite est la page Home d'un site marchand, comme l'on en trouve beaucoup, en faisant un bon exemple de design contemporain.

La structure du site est simple :

- un Header avec 2 barres de navigations
  - une navigation informative
  - une navigation accès sur le site marchand lui-même.
- le corps du site offrant une section _Hero_ et une sélection de section pour mettre en avant les produits vendu par le site.
- un footer offrant contact et les différents menu pour circuler dans le site.

## Application des concepts d'ergonomie

### Hierarchie

La hierarchie visuelle du site a été respecté en utilisant les balises :

```js

<header>
  <nav></nav>
</header>
<main> </main>
<section> </section>
<article> </article>
<footer> </footer>

```

De plus, j'ai aussi utilisé une selection de **components** pour aussi bien structué la page _Home_ que pour construire des **éléments répétitifs** que l'on peut retrouver à plusieurs endroit dans une ou plusieurs zone de la page.

### Charge cognitive

J'ai choisi ce design car bien qu'il y ait un nombre certain d'images, il n'y a pas un surnombre d'éléments à comprendre.

Les images sont facilement compréhensible et le texte n'est pas trop présent, axant la lecture de la page essentiellement sur les boutons (CTA) ou même sur les titres.

### Pattern de lecture

A mon sens, c'est un pattern en F qui est utilisé sur ce model de site.

### CTA

Les CTA sont mis en avant avec le contraste entre couleurs. Le CTA principale est donc noir en opposition avec le reste du site qui a une palette plutôt claire ou blanche.

### Heuristiques de Nielsen

Les Heuristiques de Nielsen sont utilisé dans la simplicité des boutons a interaction : icône simple à comprendre et texte directif bref.

## Accessibilité

### WCAG

Afin de respecter les codes de WCAG, j'ai ajouté des balises invisible **label** ainsi que complété les attribut nécéssaire comme **alt** dans les balises images.

J'ai aussi pu faire l'utilisation de l'attribut **aria-labelledby** pour mettre en évidence des éléments d'interactions avec leur label invisible (ex : Navbar et Footer).

### Focus

Du fait que ce projet est une reproduction unique d'une page d'accueil, tous boutons inutile et vide ont été supprimé. Une alternative a avoir un bouton vide de texte, à utiliser dans le cas d'un site concret, serait d'ajouter une action sur le click ou même d'encadrer l'image/icône par une balise **Link** spécifique à _React JS_.

Les focus ont été modifié pour s'accorder avec la D.A. de la page recopié. Cependant, il est à noté que j'ai lutté avec un input qui n'accept pas d'image pour agrémenté visuellement sa compréhension. Le focus dans le menu n'est donc pas complétement optimisé.

### Contrastes

J'ai conscience que le contraste entre le blanc et les photos utilisé n'est pas optimal, mais cela reste dépendant des photos et serait sans doute à étudié plus au niveau de la DA des photos, plutôt que sur le site lui-même dont les couleurs ont un contraste fort (noir et blanc).

### Sémantique HTML

J'ai utilisé les balises suivantes :

- **section** : Pour délimiter des zones dans la page ou même dans une sous-section lorsque le comportement de cette zone été lié à ces éléments.
- **article** : Pour séparer certains éléments, souvent lié à un contenu ou un texte.
- **aside** : en complément de la balise _article_,
- **div** : uniquement lorsqu'il les autres balises n'avaient pas de raisons d'être ou qu'il y avait trop de section et sous-section.

Biensûr j'ai aussi utilisé les balises correspondant à leur utilisation comme : Header, Nav, Main, Footer, Button, Input, Img ou encore les H (pour les titres) et les p (pour les textes).

De plus, j'ai porté une attention particulière à toujours suivre la chronologie des titres pour aller du H1 au H4 successivement.

## Choix techniques Tailwind

Les tokens ont été créé pour facilité l'utilisation de variable répétitive comme : les couleurs principales du site et la typographie générale du site.

J'ai utilisé plusieurs Utility, en m'inspirant de mon utilisation des composants :

- Si la succession de commandes étaient trop longues pour une lecture facile;
- Si cette succession de commandes est répétée dans plusieurs éléments.

Par exemple, pour l'utility **button_simple**, c'est un style que j'ai pu ré-utilisé à plusieurs endroit dans des pages afin de toujours avoir le même style et ne pas avoir des incohérences.

Dans un autre cas, il existe aussi des utility qui ont pu servir à simplifier la lecture des conditions de style comme **hero_title** et **inspiration_title** qui était en action sur une page uniquement.

## Difficultés rencontrées

### Techniques

La plus grosse difficulté aura été pour faire un style conditionnel afin de pouvoir utiliser un component à plusieurs endroit. Car cela impliquait des changements de style et de présentation qui a première vue ne donnait pas le même rendue. Résolue assez simplement.

Un autre point a été pour trouver comment ajouter un label à un input pour l'accessibilité sans que celui-ci ne soit visible. Cela a été résolu avec le _aria-labelledby_. Une autre possibilité suggéré par une collègue aurait été d'utiliser la class "sr" au lieu de "hidden" pour le style du label.

### Responsive

Aucune difficulté réelle à reporter.

### Arbitrages faits

Bien que j'ai noté que les contrastes entre images et couleurs de typo ne soient pas assez grand dans certains cas. Dans le but de suivre le design de la page, aucun changement n'a été fait sur ce point.

Par contre, les tailles des typographies ont été adapté aux besoins car celles déclarées sur Figma étaient bien trop petite et peu lisible.
