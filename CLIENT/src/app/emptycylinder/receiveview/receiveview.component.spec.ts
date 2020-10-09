import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveviewComponent } from './receiveview.component';

describe('ReceiveviewComponent', () => {
  let component: ReceiveviewComponent;
  let fixture: ComponentFixture<ReceiveviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiveviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
