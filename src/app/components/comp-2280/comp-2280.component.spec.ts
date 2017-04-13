import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2280Component } from './comp-2280.component';

describe('Comp2280Component', () => {
  let component: Comp2280Component;
  let fixture: ComponentFixture<Comp2280Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2280Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
