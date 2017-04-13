import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2110Component } from './comp-2110.component';

describe('Comp2110Component', () => {
  let component: Comp2110Component;
  let fixture: ComponentFixture<Comp2110Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2110Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
