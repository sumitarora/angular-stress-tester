import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2641Component } from './comp-2641.component';

describe('Comp2641Component', () => {
  let component: Comp2641Component;
  let fixture: ComponentFixture<Comp2641Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2641Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2641Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
