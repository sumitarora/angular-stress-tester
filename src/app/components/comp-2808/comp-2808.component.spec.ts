import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2808Component } from './comp-2808.component';

describe('Comp2808Component', () => {
  let component: Comp2808Component;
  let fixture: ComponentFixture<Comp2808Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2808Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2808Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
