import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2254Component } from './comp-2254.component';

describe('Comp2254Component', () => {
  let component: Comp2254Component;
  let fixture: ComponentFixture<Comp2254Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2254Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
