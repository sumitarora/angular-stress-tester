import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3791Component } from './comp-3791.component';

describe('Comp3791Component', () => {
  let component: Comp3791Component;
  let fixture: ComponentFixture<Comp3791Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3791Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3791Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
