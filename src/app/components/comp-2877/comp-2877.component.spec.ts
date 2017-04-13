import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2877Component } from './comp-2877.component';

describe('Comp2877Component', () => {
  let component: Comp2877Component;
  let fixture: ComponentFixture<Comp2877Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2877Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2877Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
