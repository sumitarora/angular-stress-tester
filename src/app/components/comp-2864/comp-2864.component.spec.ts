import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2864Component } from './comp-2864.component';

describe('Comp2864Component', () => {
  let component: Comp2864Component;
  let fixture: ComponentFixture<Comp2864Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2864Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2864Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
