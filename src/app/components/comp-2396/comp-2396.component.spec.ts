import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2396Component } from './comp-2396.component';

describe('Comp2396Component', () => {
  let component: Comp2396Component;
  let fixture: ComponentFixture<Comp2396Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2396Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2396Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
