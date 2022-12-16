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

interface Food {
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
  addressTypes  : Food []=  [
    {value: 'home-0', viewValue: 'home'},
    {value: 'work-1', viewValue: 'work'},
    {value: 'parents-2', viewValue: 'parents'},
    {value: 'outro-2', viewValue: 'outro'},
  ];

usuario: any = {
   nome : null,
   email : null,
   endereco: null,
   email3: null,
   addressType : this.addressTypes
}

emailFormControl= new FormControl('', [Validators.required, Validators.email]);

matcher = new MyErrorStateMatcher();


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    console.log(this.usuario.nome)
    console.log(this.usuario.email)
    console.log(this.usuario.endereco)
    console.log(form)
   
  }

  consultaCep(cep: any){
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
          .pipe(map(dados => dados))
          .subscribe(dados => console.log(dados))
        }
    }

    console.log(cep)
  }
}
