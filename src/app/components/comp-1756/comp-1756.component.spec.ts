import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1756Component } from './comp-1756.component';

describe('Comp1756Component', () => {
  let component: Comp1756Component;
  let fixture: ComponentFixture<Comp1756Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1756Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1756Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
