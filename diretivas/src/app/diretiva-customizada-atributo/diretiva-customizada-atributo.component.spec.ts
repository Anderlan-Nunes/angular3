import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaCustomizadaAtributoComponent } from './diretiva-customizada-atributo.component';

describe('DiretivaCustomizadaAtributoComponent', () => {
  let component: DiretivaCustomizadaAtributoComponent;
  let fixture: ComponentFixture<DiretivaCustomizadaAtributoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivaCustomizadaAtributoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivaCustomizadaAtributoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
