import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2419Component } from './comp-2419.component';

describe('Comp2419Component', () => {
  let component: Comp2419Component;
  let fixture: ComponentFixture<Comp2419Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2419Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2419Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
