import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  //injentar o ElementRef para poder acessar o elemento dom
  constructor(
    private _elementRef : ElementRef,
    private _renderer: Renderer2
  ) {

      //console.log(this._elementRef);
      //this._elementRef.nativeElement.style.backgroundColor='yellow' por motivo de segurança nao se manipula o dom dessa forma eh atraves do Renderer
    this._renderer.setStyle(this._elementRef.nativeElement,
     'background-color',
     'yellow'   
    );
  
  }

}
