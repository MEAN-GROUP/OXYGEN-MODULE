import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRequestComponent } from './exchange-request.component';

describe('ExchangeRequestComponent', () => {
  let component: ExchangeRequestComponent;
  let fixture: ComponentFixture<ExchangeRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
