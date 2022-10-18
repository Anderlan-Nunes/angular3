import { Injectable } from '@angular/core';

@Injectable({ 
    providedIn: 'root' 
})

export class CursosServices {

    cursos: string []= ['angular', 'php', 'js'];

    getCurso(){
        return this.cursos;
    }

    setCurso(curso: string){
        this.cursos.push(curso);
    }

}