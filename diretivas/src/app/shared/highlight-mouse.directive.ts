import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
      /*this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color', 'yellow'
    );*/
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
      /*this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color', 'yellow'
    );*/
    this.backgroundColor = 'white';
  }

 // @HostBinding('style.backgroundColor') backgroundColor: string = ''; usa esse qndo nao precisar de logica dentro como nesse caso era pra ter usado

 private backgroundColor: string = '';
 @HostBinding('style.backgroundColor') get setColor(){
  // codigo extra - usa essa forma qndo precisa fazer alguma manipulaçao com a variavel antes de setar o valor dela
    return this.backgroundColor;

 }
  constructor(/*private _elementRef: ElementRef, private _renderer: Renderer2*/) { }

}


/** HostListener  hostbinding 
HostListener como nós podemos escultar um evento de um documento html que ta ultilizando a nossa diretiva em si. Aqui dentro da diretiva (ou seja ele vai escultar no elemento o que é o host ou seja é o elemento hospedeiro dessa diretiva 
o hostListener vai fica escutando evento no hospedeiro da diretiva q nesse caso eh a tag html
hostbinding permite que agente faça o bindin a associaçao de um atributo ou uma classo do html para uma variavel

*/