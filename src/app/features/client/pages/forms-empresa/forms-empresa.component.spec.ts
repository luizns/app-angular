import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsEmpresaComponent } from './forms-empresa.component';

describe('FormsEmpresaComponent', () => {
  let component: FormsEmpresaComponent;
  let fixture: ComponentFixture<FormsEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
