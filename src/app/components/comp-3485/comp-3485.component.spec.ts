import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3485Component } from './comp-3485.component';

describe('Comp3485Component', () => {
  let component: Comp3485Component;
  let fixture: ComponentFixture<Comp3485Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3485Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3485Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
