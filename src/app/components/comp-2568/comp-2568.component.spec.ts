import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2568Component } from './comp-2568.component';

describe('Comp2568Component', () => {
  let component: Comp2568Component;
  let fixture: ComponentFixture<Comp2568Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2568Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2568Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
