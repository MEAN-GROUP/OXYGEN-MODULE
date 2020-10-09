import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDriverDataComponent } from './update-driver-data.component';

describe('UpdateDriverDataComponent', () => {
  let component: UpdateDriverDataComponent;
  let fixture: ComponentFixture<UpdateDriverDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDriverDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDriverDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
