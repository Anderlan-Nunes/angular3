import { style } from '@angular/animations';
import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){

    this.backgroundColor = this.highLightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){

    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  @Input() defaultColor: string = 'white';
  @Input('highlight') highLightColor: string = 'yellow';

  constructor() { }

  ngOnInit() {

    // para ultilizar o valor que vem do html gray e nao white q eh daki
    this.backgroundColor = this.defaultColor;
  }

}
