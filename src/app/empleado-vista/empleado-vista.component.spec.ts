import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoVistaComponent } from './empleado-vista.component';

describe('EmpleadoVistaComponent', () => {
  let component: EmpleadoVistaComponent;
  let fixture: ComponentFixture<EmpleadoVistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoVistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
