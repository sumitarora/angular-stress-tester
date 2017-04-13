import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2366Component } from './comp-2366.component';

describe('Comp2366Component', () => {
  let component: Comp2366Component;
  let fixture: ComponentFixture<Comp2366Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2366Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2366Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
