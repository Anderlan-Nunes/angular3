import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataFormComponent } from './data-form/data-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { FormDebugComponent } from './form-debug/form-debug.component';
//import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';


@NgModule({
  declarations: [
    DataFormComponent,
    TemplateFormComponent,
    FormDebugComponent
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
