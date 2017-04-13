import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4010Component } from './comp-4010.component';

describe('Comp4010Component', () => {
  let component: Comp4010Component;
  let fixture: ComponentFixture<Comp4010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
