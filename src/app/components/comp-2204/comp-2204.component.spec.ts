import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2204Component } from './comp-2204.component';

describe('Comp2204Component', () => {
  let component: Comp2204Component;
  let fixture: ComponentFixture<Comp2204Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2204Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
