import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2621Component } from './comp-2621.component';

describe('Comp2621Component', () => {
  let component: Comp2621Component;
  let fixture: ComponentFixture<Comp2621Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2621Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2621Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
