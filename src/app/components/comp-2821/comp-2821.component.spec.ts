import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2821Component } from './comp-2821.component';

describe('Comp2821Component', () => {
  let component: Comp2821Component;
  let fixture: ComponentFixture<Comp2821Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2821Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2821Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
