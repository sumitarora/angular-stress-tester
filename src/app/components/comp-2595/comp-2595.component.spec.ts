import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2595Component } from './comp-2595.component';

describe('Comp2595Component', () => {
  let component: Comp2595Component;
  let fixture: ComponentFixture<Comp2595Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2595Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2595Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
