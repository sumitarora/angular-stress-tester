import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2374Component } from './comp-2374.component';

describe('Comp2374Component', () => {
  let component: Comp2374Component;
  let fixture: ComponentFixture<Comp2374Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2374Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2374Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
