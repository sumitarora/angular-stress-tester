import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2158Component } from './comp-2158.component';

describe('Comp2158Component', () => {
  let component: Comp2158Component;
  let fixture: ComponentFixture<Comp2158Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2158Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
