import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2354Component } from './comp-2354.component';

describe('Comp2354Component', () => {
  let component: Comp2354Component;
  let fixture: ComponentFixture<Comp2354Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2354Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2354Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});