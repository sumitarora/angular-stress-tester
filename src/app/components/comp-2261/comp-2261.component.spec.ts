import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2261Component } from './comp-2261.component';

describe('Comp2261Component', () => {
  let component: Comp2261Component;
  let fixture: ComponentFixture<Comp2261Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2261Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
