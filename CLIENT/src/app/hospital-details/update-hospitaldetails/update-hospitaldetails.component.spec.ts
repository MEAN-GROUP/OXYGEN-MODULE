import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHospitaldetailsComponent } from './update-hospitaldetails.component';

describe('UpdateHospitaldetailsComponent', () => {
  let component: UpdateHospitaldetailsComponent;
  let fixture: ComponentFixture<UpdateHospitaldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHospitaldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHospitaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
