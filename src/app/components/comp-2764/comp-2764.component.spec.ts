import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2764Component } from './comp-2764.component';

describe('Comp2764Component', () => {
  let component: Comp2764Component;
  let fixture: ComponentFixture<Comp2764Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2764Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2764Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
