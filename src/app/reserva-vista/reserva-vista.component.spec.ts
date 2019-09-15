import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaVistaComponent } from './reserva-vista.component';

describe('ReservaVistaComponent', () => {
  let component: ReservaVistaComponent;
  let fixture: ComponentFixture<ReservaVistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaVistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
