import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalVistaComponent } from './sucursal-vista.component';

describe('SucursalVistaComponent', () => {
  let component: SucursalVistaComponent;
  let fixture: ComponentFixture<SucursalVistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucursalVistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
