import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2932Component } from './comp-2932.component';

describe('Comp2932Component', () => {
  let component: Comp2932Component;
  let fixture: ComponentFixture<Comp2932Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2932Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2932Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
