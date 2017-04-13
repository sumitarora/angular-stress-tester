import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2201Component } from './comp-2201.component';

describe('Comp2201Component', () => {
  let component: Comp2201Component;
  let fixture: ComponentFixture<Comp2201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
