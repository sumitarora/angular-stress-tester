import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1759Component } from './comp-1759.component';

describe('Comp1759Component', () => {
  let component: Comp1759Component;
  let fixture: ComponentFixture<Comp1759Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1759Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1759Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
