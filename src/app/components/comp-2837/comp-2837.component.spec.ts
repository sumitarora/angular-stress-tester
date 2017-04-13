import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2837Component } from './comp-2837.component';

describe('Comp2837Component', () => {
  let component: Comp2837Component;
  let fixture: ComponentFixture<Comp2837Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2837Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2837Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
