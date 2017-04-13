import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2684Component } from './comp-2684.component';

describe('Comp2684Component', () => {
  let component: Comp2684Component;
  let fixture: ComponentFixture<Comp2684Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2684Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2684Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
