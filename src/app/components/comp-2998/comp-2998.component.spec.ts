import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2998Component } from './comp-2998.component';

describe('Comp2998Component', () => {
  let component: Comp2998Component;
  let fixture: ComponentFixture<Comp2998Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2998Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2998Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
