import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2760Component } from './comp-2760.component';

describe('Comp2760Component', () => {
  let component: Comp2760Component;
  let fixture: ComponentFixture<Comp2760Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2760Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2760Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
