import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2734Component } from './comp-2734.component';

describe('Comp2734Component', () => {
  let component: Comp2734Component;
  let fixture: ComponentFixture<Comp2734Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2734Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2734Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
