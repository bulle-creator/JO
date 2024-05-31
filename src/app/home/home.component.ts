import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SportService } from '../services/sport/sport.service';
import { Sport } from '../shared/models/Sport';
import { NgControlStatusGroup } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterOutlet,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  sports:Sport[]=[];
  constructor(private sportService:SportService) {}

  ngOnInit(): void {
    this.sports= this.sportService.getAll();
  }

}
