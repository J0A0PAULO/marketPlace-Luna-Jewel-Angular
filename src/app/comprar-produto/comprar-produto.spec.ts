import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarProduto } from './comprar-produto';

describe('ComprarProduto', () => {
  let component: ComprarProduto;
  let fixture: ComponentFixture<ComprarProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComprarProduto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprarProduto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
