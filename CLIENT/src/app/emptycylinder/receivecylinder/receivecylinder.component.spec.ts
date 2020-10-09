import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivecylinderComponent } from './receivecylinder.component';

describe('ReceivecylinderComponent', () => {
  let component: ReceivecylinderComponent;
  let fixture: ComponentFixture<ReceivecylinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivecylinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivecylinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
