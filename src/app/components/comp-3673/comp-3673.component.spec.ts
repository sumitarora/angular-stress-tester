import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3673Component } from './comp-3673.component';

describe('Comp3673Component', () => {
  let component: Comp3673Component;
  let fixture: ComponentFixture<Comp3673Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3673Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3673Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
