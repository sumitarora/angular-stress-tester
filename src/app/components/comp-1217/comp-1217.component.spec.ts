import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1217Component } from './comp-1217.component';

describe('Comp1217Component', () => {
  let component: Comp1217Component;
  let fixture: ComponentFixture<Comp1217Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1217Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
