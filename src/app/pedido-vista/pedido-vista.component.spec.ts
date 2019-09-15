import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoVistaComponent } from './pedido-vista.component';

describe('PedidoVistaComponent', () => {
  let component: PedidoVistaComponent;
  let fixture: ComponentFixture<PedidoVistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoVistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
