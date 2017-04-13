import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3072Component } from './comp-3072.component';

describe('Comp3072Component', () => {
  let component: Comp3072Component;
  let fixture: ComponentFixture<Comp3072Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3072Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3072Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
