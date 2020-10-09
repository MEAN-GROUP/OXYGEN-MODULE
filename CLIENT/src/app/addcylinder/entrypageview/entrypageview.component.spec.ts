import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrypageviewComponent } from './entrypageview.component';

describe('EntrypageviewComponent', () => {
  let component: EntrypageviewComponent;
  let fixture: ComponentFixture<EntrypageviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrypageviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrypageviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
