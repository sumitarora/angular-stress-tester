import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp610Component } from './comp-610.component';

describe('Comp610Component', () => {
  let component: Comp610Component;
  let fixture: ComponentFixture<Comp610Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp610Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp610Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
