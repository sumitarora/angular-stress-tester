import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2892Component } from './comp-2892.component';

describe('Comp2892Component', () => {
  let component: Comp2892Component;
  let fixture: ComponentFixture<Comp2892Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2892Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2892Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
