import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4059Component } from './comp-4059.component';

describe('Comp4059Component', () => {
  let component: Comp4059Component;
  let fixture: ComponentFixture<Comp4059Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4059Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4059Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
