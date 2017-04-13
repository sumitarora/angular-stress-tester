import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2345Component } from './comp-2345.component';

describe('Comp2345Component', () => {
  let component: Comp2345Component;
  let fixture: ComponentFixture<Comp2345Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2345Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2345Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
