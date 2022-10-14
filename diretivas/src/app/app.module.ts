import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { HighlightDirective } from './shared/highlight.directive';
import { DiretivaCustomizadaAtributoComponent } from './diretiva-customizada-atributo/diretiva-customizada-atributo.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgifComponent,
    NgforComponent,
    NgclassComponent,
    NgstyleComponent,
    OperadorElvisComponent,
    HighlightMouseDirective,
    FundoAmareloDirective,
    DiretivaCustomizadaAtributoComponent,
    DiretivasCustomizadasComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
