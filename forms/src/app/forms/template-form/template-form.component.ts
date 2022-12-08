import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {


usuario: any = {
   nome : null,
   email : null,
   name2: null,
   email3: null

}

emailFormControl= new FormControl('', [Validators.required, Validators.email]);

matcher = new MyErrorStateMatcher();


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    console.log(this.usuario.nome)
    console.log(this.usuario.email)
    console.log(form)
   
  }

  

}
