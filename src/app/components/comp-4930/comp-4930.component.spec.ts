import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4930Component } from './comp-4930.component';

describe('Comp4930Component', () => {
  let component: Comp4930Component;
  let fixture: ComponentFixture<Comp4930Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4930Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4930Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
