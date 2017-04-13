import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2134Component } from './comp-2134.component';

describe('Comp2134Component', () => {
  let component: Comp2134Component;
  let fixture: ComponentFixture<Comp2134Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2134Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
