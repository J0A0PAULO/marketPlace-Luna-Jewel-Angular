import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroProdutos } from './filtro-produtos';

describe('FiltroProdutos', () => {
  let component: FiltroProdutos;
  let fixture: ComponentFixture<FiltroProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroProdutos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroProdutos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
