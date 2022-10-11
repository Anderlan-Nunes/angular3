import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  mostrarFavorito: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  onMostraFavorito(){
      this.mostrarFavorito = !this.mostrarFavorito;
  }

}

