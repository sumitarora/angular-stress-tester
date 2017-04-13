import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4932Component } from './comp-4932.component';

describe('Comp4932Component', () => {
  let component: Comp4932Component;
  let fixture: ComponentFixture<Comp4932Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4932Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4932Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
