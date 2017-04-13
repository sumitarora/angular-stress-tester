import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3377Component } from './comp-3377.component';

describe('Comp3377Component', () => {
  let component: Comp3377Component;
  let fixture: ComponentFixture<Comp3377Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3377Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3377Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
