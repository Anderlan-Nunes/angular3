import { Component, OnInit } from '@angular/core';

import { CursosServices } from '../cursos/cursos.services';

@Component({
  selector: 'app-criar-cursos',
  templateUrl: './criar-cursos.component.html',
  styleUrls: ['./criar-cursos.component.css']
})
export class CriarCursosComponent implements OnInit {

  constructor(private cursosSevice: CursosServices) { }

  ngOnInit(): void {
  }

  onAddCursos(curso : string){
    this.cursosSevice.setCurso(curso);
  }

}
