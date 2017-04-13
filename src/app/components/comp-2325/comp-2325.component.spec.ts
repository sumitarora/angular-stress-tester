import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2325Component } from './comp-2325.component';

describe('Comp2325Component', () => {
  let component: Comp2325Component;
  let fixture: ComponentFixture<Comp2325Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2325Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2325Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
