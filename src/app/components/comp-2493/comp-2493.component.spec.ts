import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2493Component } from './comp-2493.component';

describe('Comp2493Component', () => {
  let component: Comp2493Component;
  let fixture: ComponentFixture<Comp2493Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2493Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2493Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
