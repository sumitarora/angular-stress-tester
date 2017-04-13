import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3247Component } from './comp-3247.component';

describe('Comp3247Component', () => {
  let component: Comp3247Component;
  let fixture: ComponentFixture<Comp3247Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3247Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
