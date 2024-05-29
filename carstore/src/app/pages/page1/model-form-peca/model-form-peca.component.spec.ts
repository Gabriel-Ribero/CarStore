import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelFormPecaComponent } from './model-form-peca.component';

describe('ModelFormPecaComponent', () => {
  let component: ModelFormPecaComponent;
  let fixture: ComponentFixture<ModelFormPecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelFormPecaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelFormPecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
