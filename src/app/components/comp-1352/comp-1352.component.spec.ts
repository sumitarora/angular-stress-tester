import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1352Component } from './comp-1352.component';

describe('Comp1352Component', () => {
  let component: Comp1352Component;
  let fixture: ComponentFixture<Comp1352Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1352Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
