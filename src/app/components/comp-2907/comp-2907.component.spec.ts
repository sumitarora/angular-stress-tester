import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2907Component } from './comp-2907.component';

describe('Comp2907Component', () => {
  let component: Comp2907Component;
  let fixture: ComponentFixture<Comp2907Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2907Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
