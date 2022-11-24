import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataFormComponent } from './data-form/data-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
//import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';


@NgModule({
  declarations: [
    DataFormComponent,
    TemplateFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DataFormComponent,
    TemplateFormComponent
  ]
})
export class FormModule { }
