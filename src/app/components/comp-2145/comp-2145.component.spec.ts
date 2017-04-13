import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2145Component } from './comp-2145.component';

describe('Comp2145Component', () => {
  let component: Comp2145Component;
  let fixture: ComponentFixture<Comp2145Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2145Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
