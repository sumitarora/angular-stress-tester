import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3750Component } from './comp-3750.component';

describe('Comp3750Component', () => {
  let component: Comp3750Component;
  let fixture: ComponentFixture<Comp3750Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3750Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3750Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
