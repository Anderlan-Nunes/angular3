import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import {ErrorStateMatcher} from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

interface addressType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  selectedValue = 'vazio';
  addressTypes  : addressType []=  [
    {value: 'home-0', viewValue: 'home'},
    {value: 'work-1', viewValue: 'work'},
    {value: 'parents-2', viewValue: 'parents'},
    {value: 'outro-2', viewValue: 'outro'},
  ];

usuario: any = {
  name: null,
  email : null,
}
emailFormControl= new FormControl('', [Validators.required, Validators.email]);

matcher = new MyErrorStateMatcher();


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form:any){

    console.log(form)
   
  }

  consultaCep(cep: any, form: any){
    //Nova variável "cep" somente com dígitos
    cep = cep.replace(/\D/g, '');
    //Verifica se campo cep possui valor informado.
    if (cep != '' && cep != null ) {
      //Expressão regular para validar o CEP.
      let validacep = /^[0-9]{8}$/;
        //Valida o formato do CEP.
        if(validacep.test(cep)) {
          //Consulta o webservice viacep.com.br/
          this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
          .pipe(map((dados) => dados))
          .subscribe(dados => this.populaDadosForm(dados, form))
        }
    }
  }

  populaDadosForm(dados: any, formulario: any){
    formulario.form.patchValue({
      endereco : {
        address: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
        complemento: dados.complemento
      }
    })

  }
}
