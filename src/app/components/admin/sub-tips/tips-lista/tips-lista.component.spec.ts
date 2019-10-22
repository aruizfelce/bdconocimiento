import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsListaComponent } from './tips-lista.component';

describe('TipsListaComponent', () => {
  let component: TipsListaComponent;
  let fixture: ComponentFixture<TipsListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
