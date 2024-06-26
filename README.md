# JO-2024

## Documentation technique

Pour la sécurité mettre le site en Https, chiffré les donnés(pour le paiement), avoir une authentification forte (12 caractères, chiffre, symbole, majuscule) et faire régulièrement des sauvegardes.

## Manuel D'utilisation 
### Connexion
Le visiteur peux naviguer librement sur le site sans être connecté,( pour cela cliquer sur JO-2024 pour voir les épreuves).

<img width="77" alt="image" src="https://github.com/bulle-creator/JO/assets/77787321/c2de6edc-2229-41f7-8028-70c0c0116a6b">

 Mais s'ils veulent achétent un ticket ils devront ce connecter. Pour cela il devront appuyer sur le bouton connexion:

<img width="82" alt="image" src="https://github.com/bulle-creator/JO/assets/77787321/7d887601-6a6d-4668-a8fc-5f200b31952a">

Puis s'ils ont un compte ce connecter, sinon crée un comtpe en appyant sur *Nouvelle utilisateur*

<img width="416" alt="image" src="https://github.com/bulle-creator/JO/assets/77787321/407c57f1-df00-492c-abde-b33ac924ee4e">

Puis renseigner leurs informations:

<img width="413" alt="image" src="https://github.com/bulle-creator/JO/assets/77787321/c2a4592f-7bd1-405f-b71d-fcad0a79ffd3">

Aprés tout cela le visiteur pourras prendre son ticket. Pour cela appuyer sur le boutton ticket:

<img width="67" alt="image" src="https://github.com/bulle-creator/JO/assets/77787321/2c009088-f82b-4912-bace-86ca866413dc">

Et choisissent leur sport, date et offre

<img width="367" alt="image" src="https://github.com/bulle-creator/JO/assets/77787321/2e2ec255-c3f7-4798-9a4b-770b351559fd">

Aprés cela ils paient et reçoivent leur ticket sous forme de QrCode

<img width="236" alt="image" src="https://github.com/bulle-creator/JO/assets/77787321/8bb0ba2d-b407-44b9-b381-2a843c46e516">


## Probleme rencontré

Lors du devellopement de mon application j'ai rencontré certain probleme :
 - Pour commencer mon Angular est en standalone donc pour le routing il a fallut, aller dans *app.routes.ts* est importer tout les components exemple.
   
   ```
   import { Routes } from '@angular/router';
   import { HomeComponent } from './home/home.component';
   import { LoginComponent } from './login/login.component';

   export const routes: Routes = [
    { path: 'home-component' , component:HomeComponent,},
    { path: 'login-component' , component:LoginComponent,},
   ];
   ```
   et dans chaque nouveau fichier *.ts* importer **RouterLink,RouterOutlet** exemple:
   ```
   import { RouterLink, RouterOutlet } from '@angular/router';
   
   @Component({
    selector: 'app-login',
    standalone: true,
    imports: [RouterLink, RouterOutlet],
   ```
- J'ai également eu du mal utiliser MongoDb car, plus habituer a phpMyAdmin (je trouve ça plus instinctif)
  ```
  INSERT INTO `user` (id,nom,prenom,login,role,password)
	VALUES(1,'Emma','Wastone','Ewastone','user','Ewat45'),
    	  (2,'Lorent','Yves','Lyves','admin','Admin123');
  ```
  
- J'ai également eu du mal à afficher les épreuves. Mais cela était du a une eureur de synthaxe.
- J'ai eu du mal avec le déploment et n'est pas réussi. J'ai utiliser *Heroku* et il y a eu un probleme par rapport au qrcode.
 ```
  Some possible problems:
       
       - Node version not specified in package.json
         https://devcenter.heroku.com/articles/nodejs-support#specifying-a-node-js-version
       
       Love,
       Heroku
       
  !     Push rejected, failed to compile Node.js app.
  !     Push failed;
 ```
<img width="612" alt="image" src="https://github.com/bulle-creator/JO/assets/77787321/24196f66-e9b2-4112-bf48-1ebc59f86865">


Pour le QrCode: *https://www.npmjs.com/package/angularx-qrcode*


# Database

-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 31 mai 2024 à 14:07
-- Version du serveur : 10.4.22-MariaDB
-- Version de PHP : 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `jo_2024`
--

-- --------------------------------------------------------

--
-- Structure de la table `tickets`
--

CREATE TABLE `tickets` (
  `id-tickets` int(100) NOT NULL,
  `offre` varchar(25) NOT NULL,
  `prix` int(100) NOT NULL,
  `nombre_personne` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `tickets`
--

INSERT INTO `tickets` (`id-tickets`, `offre`, `prix`, `nombre_personne`) VALUES
(1, 'solo', 24, 1),
(2, 'duo', 48, 2),
(3, 'familliale', 96, 4);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `Id-user` int(100) NOT NULL,
  `prenom` varchar(25) NOT NULL,
  `nom` varchar(25) NOT NULL,
  `mot_de_passe` varchar(25) NOT NULL,
  `login` varchar(25) NOT NULL,
  `role` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`Id-user`, `prenom`, `nom`, `mot_de_passe`, `login`, `role`) VALUES
(1, 'Emma', 'Wastone', 'Ewat45', 'Ewastone', 'user'),
(2, 'Lorent', 'Yves', 'Admin123', 'Lyves', 'admin');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`id-tickets`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`Id-user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

