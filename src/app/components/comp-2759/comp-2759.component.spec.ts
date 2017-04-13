import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2759Component } from './comp-2759.component';

describe('Comp2759Component', () => {
  let component: Comp2759Component;
  let fixture: ComponentFixture<Comp2759Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2759Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2759Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
