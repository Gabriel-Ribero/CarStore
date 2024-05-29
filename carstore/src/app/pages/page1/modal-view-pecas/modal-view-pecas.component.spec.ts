import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewPecasComponent } from './modal-view-pecas.component';

describe('ModalViewPecasComponent', () => {
  let component: ModalViewPecasComponent;
  let fixture: ComponentFixture<ModalViewPecasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalViewPecasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalViewPecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
