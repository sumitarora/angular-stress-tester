import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2390Component } from './comp-2390.component';

describe('Comp2390Component', () => {
  let component: Comp2390Component;
  let fixture: ComponentFixture<Comp2390Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2390Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2390Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
