import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaVistaComponent } from './categoria-vista.component';

describe('CategoriaVistaComponent', () => {
  let component: CategoriaVistaComponent;
  let fixture: ComponentFixture<CategoriaVistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaVistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
