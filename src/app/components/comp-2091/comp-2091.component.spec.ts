import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2091Component } from './comp-2091.component';

describe('Comp2091Component', () => {
  let component: Comp2091Component;
  let fixture: ComponentFixture<Comp2091Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2091Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2091Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
