import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2192Component } from './comp-2192.component';

describe('Comp2192Component', () => {
  let component: Comp2192Component;
  let fixture: ComponentFixture<Comp2192Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2192Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
