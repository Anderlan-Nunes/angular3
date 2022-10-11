import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.css']
})
export class OperadorElvisComponent implements OnInit {

  tarefa: any = {
    desc : 'descriçao da tarefa',
    responsavel: null
  };

  outraTarefa : any = {
    desc : 'outra descriçaõ',
    responsavel: {
      nome : 'Nome do Doido'
    }
  };

  tarefaElvis: any = {
    desc: 'outra descriçao',
    responsavel: {
       usuario: null
    }
  };

  outraTarefaElvis: any = {
    desc: 'outra descriçao',
    responsavel: {
       usuario: {
         nome : 'aqui nome do usuario'
      }
    }
  };
  

  constructor() { }

  ngOnInit(): void {
  }

}
