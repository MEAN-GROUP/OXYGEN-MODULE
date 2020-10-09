import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookindataComponent } from './add-bookindata.component';

describe('AddBookindataComponent', () => {
  let component: AddBookindataComponent;
  let fixture: ComponentFixture<AddBookindataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBookindataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookindataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
