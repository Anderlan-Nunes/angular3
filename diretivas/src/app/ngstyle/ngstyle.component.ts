import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  fundo : boolean = false;

  tamanhoFonte: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

  mudaFundo(){
    this.fundo = !this.fundo;
  }
}
