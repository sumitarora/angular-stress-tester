import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2813Component } from './comp-2813.component';

describe('Comp2813Component', () => {
  let component: Comp2813Component;
  let fixture: ComponentFixture<Comp2813Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2813Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2813Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
