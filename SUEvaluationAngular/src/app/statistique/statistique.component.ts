import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Statistique } from '../models/Statistique';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  @Input() statistique : Statistique |undefined
  @Output() suppression : EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  evennementClic(){
    this.suppression.emit()
  }

}
