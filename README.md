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
- J'ai également eu du mal utiliser MongoDb car, plus habituer a phpMyAdmin (je trouve ça plus instinctif), au final au lieu d'utilisé Mongodb Compass j'ai utilisé Mongodb ALtas. Et Thunder Client à la place Insomina.
  ```
  INSERT INTO `user` (id,nom,prenom,login,role,password)
	VALUES(1,'Emma','Wastone','Ewastone','user','Ewat45'),
    	  (2,'Lorent','Yves','Lyves','admin','Admin123');
  ```

  <img width="942" alt="image" src="https://github.com/user-attachments/assets/05084e25-1853-476f-b787-be018ccf550d">

  
- J'ai également eu du mal à afficher les épreuves. Mais cela était du a une eureur de synthaxe.
- J'ai eu du mal avec le déploment et n'est pas réussi. J'ai utiliser *Heroku* et il y a eu un probleme par rapport au qrcode.
- J'ai eu du mal a joindre mon api a mon projet.
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




