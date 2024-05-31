import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormCarrosComponent } from './modal-form-carros.component';

describe('ModalFormCarrosComponent', () => {
  let component: ModalFormCarrosComponent;
  let fixture: ComponentFixture<ModalFormCarrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalFormCarrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalFormCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
