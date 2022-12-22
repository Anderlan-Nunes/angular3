import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup | any;
  //formulario2?: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.formulario= this.formBuilder.group({
      nome: [null, Validators.required],
      //email passa mais de um validção por isso usamos array
      email: [null, [Validators.required, Validators.email]] 
    })
  }

  onSubmit(formulario: any){

    console.log(this.formulario);

    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
    .pipe(map((res: any) => res))
    .subscribe({
      next: (dados) => console.log(dados),
      error: (e)=> console.error(e),
      complete: () => this.resetar(),

    })
  
  }

  
  resetar(){
    this.formulario.reset();
  }

}

/** 
 *    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // })
 
 * reset()
    não colocar o reset antes do post .reset só depois q vim a mensagem de sucesso do post.   
    logo que o response(console.log(dados)) ter a saída no console que o formulário vai ser 
    limpo
    */

      /**
   * this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
    .pipe(map((res: any) => res))
    .subscribe((dados: any) => {
      console.log(dados);
      //reserta o form
      this.resetar();
    },
    (error:any) => alert('erro')
    )
   */