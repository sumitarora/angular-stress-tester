import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2561Component } from './comp-2561.component';

describe('Comp2561Component', () => {
  let component: Comp2561Component;
  let fixture: ComponentFixture<Comp2561Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2561Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2561Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
