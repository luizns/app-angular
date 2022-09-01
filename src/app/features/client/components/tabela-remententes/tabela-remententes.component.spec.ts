import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaRemententesComponent } from './tabela-remententes.component';

describe('TabelaRemententesComponent', () => {
  let component: TabelaRemententesComponent;
  let fixture: ComponentFixture<TabelaRemententesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaRemententesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaRemententesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
