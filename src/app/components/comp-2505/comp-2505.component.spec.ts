import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2505Component } from './comp-2505.component';

describe('Comp2505Component', () => {
  let component: Comp2505Component;
  let fixture: ComponentFixture<Comp2505Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2505Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
