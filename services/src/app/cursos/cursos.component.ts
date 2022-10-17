import { Component, OnInit } from '@angular/core';
import { CursosServices } from './cursos.services';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string [] = ['']

  constructor( private cursosService : CursosServices) { 
    
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCurso();
  }


}
