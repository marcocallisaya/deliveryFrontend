import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorVistaComponent } from './proveedor-vista.component';

describe('ProveedorVistaComponent', () => {
  let component: ProveedorVistaComponent;
  let fixture: ComponentFixture<ProveedorVistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorVistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
