import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2045Component } from './comp-2045.component';

describe('Comp2045Component', () => {
  let component: Comp2045Component;
  let fixture: ComponentFixture<Comp2045Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2045Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2045Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
