import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2903Component } from './comp-2903.component';

describe('Comp2903Component', () => {
  let component: Comp2903Component;
  let fixture: ComponentFixture<Comp2903Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2903Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2903Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
