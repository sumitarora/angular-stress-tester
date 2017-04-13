import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2486Component } from './comp-2486.component';

describe('Comp2486Component', () => {
  let component: Comp2486Component;
  let fixture: ComponentFixture<Comp2486Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2486Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2486Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
