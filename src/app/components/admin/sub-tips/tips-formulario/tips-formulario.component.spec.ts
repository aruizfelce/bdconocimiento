import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsFormularioComponent } from './tips-formulario.component';

describe('TipsFormularioComponent', () => {
  let component: TipsFormularioComponent;
  let fixture: ComponentFixture<TipsFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
