import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1122Component } from './comp-1122.component';

describe('Comp1122Component', () => {
  let component: Comp1122Component;
  let fixture: ComponentFixture<Comp1122Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1122Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
