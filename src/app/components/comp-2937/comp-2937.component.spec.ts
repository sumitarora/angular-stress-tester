import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2937Component } from './comp-2937.component';

describe('Comp2937Component', () => {
  let component: Comp2937Component;
  let fixture: ComponentFixture<Comp2937Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2937Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2937Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
