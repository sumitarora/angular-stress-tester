import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1093Component } from './comp-1093.component';

describe('Comp1093Component', () => {
  let component: Comp1093Component;
  let fixture: ComponentFixture<Comp1093Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1093Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1093Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
