import { Component } from '@angular/core';
import { Statistique } from './models/Statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  statistique1 : Statistique = 
  { 
    identifiant: "fa1f5f40-be3b-11eb-91ec-7f5875ecfb46",
    titre: "Démographie en France",
    valeur : "60M"
  }

  statistique2 : Statistique  = 
  { 
    identifiant: "fa1f5f40-be3b-11eb-91ec-7f5875ecfb47",
    titre: "Démographie en Allemagne",
    valeur : "83M"
  }
}
