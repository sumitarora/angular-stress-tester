import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2179Component } from './comp-2179.component';

describe('Comp2179Component', () => {
  let component: Comp2179Component;
  let fixture: ComponentFixture<Comp2179Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2179Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
