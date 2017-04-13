import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2925Component } from './comp-2925.component';

describe('Comp2925Component', () => {
  let component: Comp2925Component;
  let fixture: ComponentFixture<Comp2925Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2925Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2925Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
