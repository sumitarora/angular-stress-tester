import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2836Component } from './comp-2836.component';

describe('Comp2836Component', () => {
  let component: Comp2836Component;
  let fixture: ComponentFixture<Comp2836Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2836Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2836Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
