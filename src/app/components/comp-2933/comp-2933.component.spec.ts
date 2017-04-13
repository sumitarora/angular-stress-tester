import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2933Component } from './comp-2933.component';

describe('Comp2933Component', () => {
  let component: Comp2933Component;
  let fixture: ComponentFixture<Comp2933Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2933Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2933Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
