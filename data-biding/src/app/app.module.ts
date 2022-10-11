import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ClassStyleBindingComponent } from './class-style-binding/class-style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { InputPropertiesComponent } from './input-properties/input-properties.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    ClassStyleBindingComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    InputPropertiesComponent,
    OutputPropertyComponent,
    LifeCycleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
