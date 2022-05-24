import { Injectable, OnInit } from '@angular/core';
import { Statistique, StatistiqueBack } from '../models/Statistique';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

  statistiques : Statistique[] = []

  constructor(private httpClient : HttpClient) {

    this.httpClient.get<StatistiqueBack[]>("https://stats.naminilamy.fr").subscribe(
      res => {
        for (const statistique of res) {
          this.statistiques.push({
            identifiant: statistique.id,
            titre: statistique.title,
            valeur : statistique.value
          });
        }
      }
    );
   }

  supprimerStatistique(statistique : Statistique) {
    let positionStatistique = this.statistiques.indexOf(statistique);
    if (positionStatistique != -1) {
      this.statistiques.splice(positionStatistique, 1);
    }
  }
}
