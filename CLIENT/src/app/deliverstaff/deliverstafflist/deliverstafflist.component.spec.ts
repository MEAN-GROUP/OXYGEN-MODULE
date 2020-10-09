import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverstafflistComponent } from './deliverstafflist.component';

describe('DeliverstafflistComponent', () => {
  let component: DeliverstafflistComponent;
  let fixture: ComponentFixture<DeliverstafflistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverstafflistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverstafflistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
