import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-properties',
  templateUrl: './input-properties.component.html',
  styleUrls: ['./input-properties.component.css']
})
export class InputPropertiesComponent implements OnInit {

  @Input() nome: string = ''; // essa propridade nome eh usada la no data binding atraves do input
 // @Input('nome') nomeCurso: string = ''; //pode usar assim tambem o nome como variavel externa e nomeCurso como interna

  constructor() { }

  ngOnInit(): void {
  }

}
