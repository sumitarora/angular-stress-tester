import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2880Component } from './comp-2880.component';

describe('Comp2880Component', () => {
  let component: Comp2880Component;
  let fixture: ComponentFixture<Comp2880Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2880Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2880Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
