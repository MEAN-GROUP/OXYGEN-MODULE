import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulanceUpdateComponent } from './ambulance-update.component';

describe('AmbulanceUpdateComponent', () => {
  let component: AmbulanceUpdateComponent;
  let fixture: ComponentFixture<AmbulanceUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbulanceUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulanceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
