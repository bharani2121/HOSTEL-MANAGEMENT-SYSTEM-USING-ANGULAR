import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintSubmittedComponent } from './complaint-submitted.component';

describe('ComplaintSubmittedComponent', () => {
  let component: ComplaintSubmittedComponent;
  let fixture: ComponentFixture<ComplaintSubmittedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComplaintSubmittedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComplaintSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
