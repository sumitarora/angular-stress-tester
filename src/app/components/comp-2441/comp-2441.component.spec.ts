import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2441Component } from './comp-2441.component';

describe('Comp2441Component', () => {
  let component: Comp2441Component;
  let fixture: ComponentFixture<Comp2441Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2441Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2441Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
