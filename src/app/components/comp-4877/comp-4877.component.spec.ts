import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4877Component } from './comp-4877.component';

describe('Comp4877Component', () => {
  let component: Comp4877Component;
  let fixture: ComponentFixture<Comp4877Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4877Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4877Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
