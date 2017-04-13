import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2600Component } from './comp-2600.component';

describe('Comp2600Component', () => {
  let component: Comp2600Component;
  let fixture: ComponentFixture<Comp2600Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2600Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
