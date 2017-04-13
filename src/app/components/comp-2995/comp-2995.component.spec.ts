import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2995Component } from './comp-2995.component';

describe('Comp2995Component', () => {
  let component: Comp2995Component;
  let fixture: ComponentFixture<Comp2995Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2995Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2995Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
