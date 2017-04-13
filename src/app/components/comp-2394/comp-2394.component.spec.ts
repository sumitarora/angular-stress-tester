import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2394Component } from './comp-2394.component';

describe('Comp2394Component', () => {
  let component: Comp2394Component;
  let fixture: ComponentFixture<Comp2394Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2394Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2394Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
