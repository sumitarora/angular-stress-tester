import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2625Component } from './comp-2625.component';

describe('Comp2625Component', () => {
  let component: Comp2625Component;
  let fixture: ComponentFixture<Comp2625Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2625Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2625Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
