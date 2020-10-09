import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDriverLocComponent } from './update-driver-loc.component';

describe('UpdateDriverLocComponent', () => {
  let component: UpdateDriverLocComponent;
  let fixture: ComponentFixture<UpdateDriverLocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDriverLocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDriverLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
