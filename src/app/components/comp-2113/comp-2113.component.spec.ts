import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2113Component } from './comp-2113.component';

describe('Comp2113Component', () => {
  let component: Comp2113Component;
  let fixture: ComponentFixture<Comp2113Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2113Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
