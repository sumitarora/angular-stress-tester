import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2876Component } from './comp-2876.component';

describe('Comp2876Component', () => {
  let component: Comp2876Component;
  let fixture: ComponentFixture<Comp2876Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2876Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2876Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
