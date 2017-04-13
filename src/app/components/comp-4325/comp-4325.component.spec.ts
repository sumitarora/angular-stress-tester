import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4325Component } from './comp-4325.component';

describe('Comp4325Component', () => {
  let component: Comp4325Component;
  let fixture: ComponentFixture<Comp4325Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4325Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4325Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
