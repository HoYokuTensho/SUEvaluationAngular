import { Injectable, OnInit } from '@angular/core';
import { Statistique } from '../models/Statistique';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

  statistiques : Statistique[] = 
  [
    { 
     identifiant: "fa1f5f40-be3b-11eb-91ec-7f5875ecfb46",
     titre: "Démographie en France",
     valeur : "60M"
    },
    { 
     identifiant: "fa1f5f40-be3b-11eb-91ec-7f5875ecfb47",
     titre: "Démographie en Allemagne",
     valeur : "83M"
    },
    {
      identifiant: "fa1f5f40-be3b-11eb-91ec-7f5875ecfb48",
      titre: "Démographie en Italie",
      valeur : "59M"
    }
  ]
  constructor() { }
}
