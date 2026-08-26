import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrosAlunos } from './cadastros-alunos';

describe('CadastrosAlunos', () => {
  let component: CadastrosAlunos;
  let fixture: ComponentFixture<CadastrosAlunos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrosAlunos],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastrosAlunos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
