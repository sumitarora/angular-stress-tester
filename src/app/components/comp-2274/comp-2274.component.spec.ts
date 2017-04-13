import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2274Component } from './comp-2274.component';

describe('Comp2274Component', () => {
  let component: Comp2274Component;
  let fixture: ComponentFixture<Comp2274Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2274Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2274Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
