import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1847Component } from './comp-1847.component';

describe('Comp1847Component', () => {
  let component: Comp1847Component;
  let fixture: ComponentFixture<Comp1847Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1847Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1847Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
