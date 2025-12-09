import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormasPagamento } from './formas-pagamento';

describe('FormasPagamento', () => {
  let component: FormasPagamento;
  let fixture: ComponentFixture<FormasPagamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormasPagamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormasPagamento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
