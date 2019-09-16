import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoVistaComponent } from './auto-vista.component';

describe('AutoVistaComponent', () => {
  let component: AutoVistaComponent;
  let fixture: ComponentFixture<AutoVistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoVistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
