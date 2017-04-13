import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2779Component } from './comp-2779.component';

describe('Comp2779Component', () => {
  let component: Comp2779Component;
  let fixture: ComponentFixture<Comp2779Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2779Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2779Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
