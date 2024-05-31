import { Injectable } from '@angular/core';
import {Sport} from '../../shared/models/Sport';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor() { }


  getFoodById(id:number): Sport{
  return this.getAll().find(sports => sports.id == id)!;
  }



    getAll():Sport[]{
      return [
        {
          id: 1,
          name:'Course de hais',
          description: 'La course de haies est une épreuve d athlétisme où les coureurs doivent franchir des barrières à intervalles réguliers sur une distance définie.',
          imageUrl: 'assets/images/sports/sport-1.jpg',
        },
        {
          id: 2,
          name:'Natation',
          description: 'La natation est un sport aquatique où les participants parcourent une certaine distance en nageant selon différents styles.',
          imageUrl: 'assets/images/sports/sport-2.jpg',
        },
        {
        id: 3,
        name:'Equitation',
        description: 'L équitation est un sport où le cavalier dirige et contrôle un cheval pour réaliser divers exercices ou parcours.',
        imageUrl: 'assets/images/sports/sport-3.jpg',
        },
        { id: 4,
          name:'Tir à l arc',
          description: 'Le tir à l arc est un sport où les participants tirent des flèches avec un arc pour atteindre des cibles à différentes distances.',
          imageUrl: 'assets/images/sports/sport-4.jpg',
        },
        { id: 5,
          name:'Escrime',
          description: ' L escrime est un sport de combat où deux adversaires s affrontent à l épée, au fleuret ou au sabre en visant des touches sur le corps de l autre.',
          imageUrl: 'assets/images/sports/sport-5.jpg',
        },
        {
          id: 6,
          name:'Cyclisme',
          description: 'Le cyclisme est un sport où les participants parcourent des distances sur des vélos, sur route ou en terrain varié, en visant la vitesse et l endurance.',
          imageUrl: 'assets/images/sports/sport-6.jpg',
        },
        {
          id: 7,
          name:'Football',
          description: ' Le cyclisme est un sport où les participants parcourent des distances sur des vélos, sur route ou en terrain varié, en visant la vitesse et l endurance.',
          imageUrl: 'assets/images/sports/sport-7.jpg',
        },
        {
          id: 8,
          name:'Surf',
          description: 'Le surf est un sport aquatique où les participants montent sur une planche pour glisser sur les vagues de l océan.',
          imageUrl: 'assets/images/sports/sport-8.jpg',
        },
      ]

    }
  }
