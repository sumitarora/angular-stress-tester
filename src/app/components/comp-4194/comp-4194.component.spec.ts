import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4194Component } from './comp-4194.component';

describe('Comp4194Component', () => {
  let component: Comp4194Component;
  let fixture: ComponentFixture<Comp4194Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4194Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
