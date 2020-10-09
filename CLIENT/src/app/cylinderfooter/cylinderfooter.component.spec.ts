import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CylinderfooterComponent } from './cylinderfooter.component';

describe('CylinderfooterComponent', () => {
  let component: CylinderfooterComponent;
  let fixture: ComponentFixture<CylinderfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CylinderfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CylinderfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
