import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1605Component } from './comp-1605.component';

describe('Comp1605Component', () => {
  let component: Comp1605Component;
  let fixture: ComponentFixture<Comp1605Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1605Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1605Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
