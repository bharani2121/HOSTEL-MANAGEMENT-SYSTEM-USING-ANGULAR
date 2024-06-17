import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAddedComponent } from './room-added.component';

describe('RoomAddedComponent', () => {
  let component: RoomAddedComponent;
  let fixture: ComponentFixture<RoomAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomAddedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
