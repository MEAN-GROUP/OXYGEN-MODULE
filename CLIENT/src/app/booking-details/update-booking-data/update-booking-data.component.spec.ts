import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBookingDataComponent } from './update-booking-data.component';

describe('UpdateBookingDataComponent', () => {
  let component: UpdateBookingDataComponent;
  let fixture: ComponentFixture<UpdateBookingDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBookingDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBookingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
