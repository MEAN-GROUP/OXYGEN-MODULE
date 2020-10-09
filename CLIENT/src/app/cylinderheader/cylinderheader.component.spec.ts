import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CylinderheaderComponent } from './cylinderheader.component';

describe('CylinderheaderComponent', () => {
  let component: CylinderheaderComponent;
  let fixture: ComponentFixture<CylinderheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CylinderheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CylinderheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
