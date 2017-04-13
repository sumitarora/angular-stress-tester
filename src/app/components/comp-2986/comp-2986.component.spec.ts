import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2986Component } from './comp-2986.component';

describe('Comp2986Component', () => {
  let component: Comp2986Component;
  let fixture: ComponentFixture<Comp2986Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2986Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2986Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
