import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valorInput: number = 0; //assim consegue usar o valorInicial setado no databinding

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput!: ElementRef;
  @Output() mudouNovoValor = new EventEmitter();

  constructor() { }

  valorIncrementa(){
    this.valorInput++
    this.mudouValor.emit({novoValor: this.valorInput});
  }

  valorDecrementa(){
    this.valorInput--
    this.mudouValor.emit({novoValor: this.valorInput})
  }

  novoValorIncrementa(){
    this.campoValorInput.nativeElement.value++
    this.mudouNovoValor.emit({novoValor: this.campoValorInput.nativeElement.value});
  }

  novoValorDecrementa(){
    this.campoValorInput.nativeElement.value--
    this.mudouNovoValor.emit({novoValor: this.campoValorInput.nativeElement.value});
  }

  ngOnInit(): void {
  }

}

/**EventEmitter .emit
 * isso eh um emissor de evento 
EE eh uma forma de passar evento para frente atraves do metodo .emit('pode passar qualquer informacao para o componente pai') pode passar tambem um objeto .emit({novoValor: this.valor}) assim o componente pai vai obter o novo valor
 */