# JO-2024

## Documentation technique

Pour la sécurité mettre le site en Https, chiffré les donnés(pour le paiement), avoir une authentification forte (12 caractères, chiffre, symbole, majuscule) et faire régulièrement des sauvegardes.

## Manuel D'utilisation 
### Connexion
Le visiteur peux naviguer librement sur le site sans être connecté,( pour cela cliquer sur JO-2024 pour voir les épreuves).

<img width="77" alt="image" src="https://github.com/bulle-creator/JO-2024/assets/77787321/1171e84d-7dde-4d78-8bfc-5372aa50a2f0">

 Mais s'ils veulent achétent un ticket ils devront ce connecter. Pour cela il devront appuyer sur le bouton connexion:

<img width="89" alt="image" src="https://github.com/bulle-creator/JO-2024/assets/77787321/086bf62d-b66c-4153-ad00-d8323fbbe123">

Puis s'ils ont un compte ce connecter, sinon crée un comtpe en appyant sur *Nouvelle utilisateur*

<img width="420" alt="image" src="https://github.com/bulle-creator/JO-2024/assets/77787321/20cc4025-2c24-4978-804a-61fc2d0b092a">

Puis renseigner leurs informations:

<img width="410" alt="image" src="https://github.com/bulle-creator/JO-2024/assets/77787321/480465a8-f29b-41ad-bbda-9a3cf7c31635">

Aprés tout cela le visiteur pourras prendre son ticket. Pour cela appuyer sur le boutton ticket:

<img width="88" alt="image" src="https://github.com/bulle-creator/JO-2024/assets/77787321/6bf2f029-8657-4edc-a857-68df5c8c454f">

Et choisissent leur sport, date et offre

<img width="366" alt="image" src="https://github.com/bulle-creator/JO-2024/assets/77787321/dfff8f1b-8ae5-4573-a17c-9481db3e4d21">

Aprés cela ils paient et reçoivent leur ticket sous forme de QrCode

<img width="225" alt="image" src="https://github.com/bulle-creator/JO-2024/assets/77787321/e4ff3a81-0493-4323-be61-23338be94f2a">


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
Pour le QrCode: *https://www.npmjs.com/package/angularx-qrcode*
