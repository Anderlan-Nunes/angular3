import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  nome:string = 'adf';

  pessoa: any = {
    nome: 'maria',
    idade: 20

  }

  constructor() { }

  ngOnInit(): void {
  }

}
