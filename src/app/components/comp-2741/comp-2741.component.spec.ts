import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2741Component } from './comp-2741.component';

describe('Comp2741Component', () => {
  let component: Comp2741Component;
  let fixture: ComponentFixture<Comp2741Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2741Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2741Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
