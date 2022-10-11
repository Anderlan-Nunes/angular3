import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';


@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 10;
  constructor() { }

  ngOnInit(): void {
    this.log('ngOnInit')
  }

  ngOnChanges(): void {
    this.log('ngOnChanges')
  }

  ngDoCheck(): void {
    this.log('ngDoCheck')
  }

  ngAfterContentInit(): void {
    this.log('ngAfterContentInit')
  }

  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked')
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked')
  }

  ngOnDestroy(): void {
    this.log('ngOnDestroy')
  }

  private log(hook: string){
    return console.log(hook)
  }
}