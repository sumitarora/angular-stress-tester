import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2583Component } from './comp-2583.component';

describe('Comp2583Component', () => {
  let component: Comp2583Component;
  let fixture: ComponentFixture<Comp2583Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2583Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2583Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
