import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2053Component } from './comp-2053.component';

describe('Comp2053Component', () => {
  let component: Comp2053Component;
  let fixture: ComponentFixture<Comp2053Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2053Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2053Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
