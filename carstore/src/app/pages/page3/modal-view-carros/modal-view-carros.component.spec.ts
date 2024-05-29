import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewCarrosComponent } from './modal-view-carros.component';

describe('ModalViewCarrosComponent', () => {
  let component: ModalViewCarrosComponent;
  let fixture: ComponentFixture<ModalViewCarrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalViewCarrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalViewCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
