import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2724Component } from './comp-2724.component';

describe('Comp2724Component', () => {
  let component: Comp2724Component;
  let fixture: ComponentFixture<Comp2724Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2724Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2724Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
