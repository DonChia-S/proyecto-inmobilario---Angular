import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarInmuebleComponent } from './solicitar-inmueble.component';

describe('SolicitarInmuebleComponent', () => {
  let component: SolicitarInmuebleComponent;
  let fixture: ComponentFixture<SolicitarInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarInmuebleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
