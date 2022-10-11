import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  nomeDoCurso: string = 'angular';

  valorInicial= 15;

  url: string = 'https://github.com/';
  cursoAngular: boolean = true;
  urlImagem: string = 'https://placeimg.com/640/480/any'

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  onMudouValor(evento: any){
    console.log("outro" +evento.novoValor);
  }
  onMudouNovoValor(evento: any){
    console.log("novo" +evento.novoValor);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
