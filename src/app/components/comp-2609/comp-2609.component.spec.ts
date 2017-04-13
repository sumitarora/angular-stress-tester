import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2609Component } from './comp-2609.component';

describe('Comp2609Component', () => {
  let component: Comp2609Component;
  let fixture: ComponentFixture<Comp2609Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2609Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2609Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
