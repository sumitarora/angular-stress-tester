import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3877Component } from './comp-3877.component';

describe('Comp3877Component', () => {
  let component: Comp3877Component;
  let fixture: ComponentFixture<Comp3877Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3877Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3877Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
