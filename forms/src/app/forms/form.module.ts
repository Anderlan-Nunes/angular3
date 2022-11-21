import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataFormComponent } from './data-form/data-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';



@NgModule({
  declarations: [
    DataFormComponent,
    TemplateFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FormModule { }
