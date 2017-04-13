import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2408Component } from './comp-2408.component';

describe('Comp2408Component', () => {
  let component: Comp2408Component;
  let fixture: ComponentFixture<Comp2408Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2408Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2408Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
