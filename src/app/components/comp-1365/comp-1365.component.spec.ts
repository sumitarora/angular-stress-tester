import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1365Component } from './comp-1365.component';

describe('Comp1365Component', () => {
  let component: Comp1365Component;
  let fixture: ComponentFixture<Comp1365Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1365Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
