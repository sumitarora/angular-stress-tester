import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2029Component } from './comp-2029.component';

describe('Comp2029Component', () => {
  let component: Comp2029Component;
  let fixture: ComponentFixture<Comp2029Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2029Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2029Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
