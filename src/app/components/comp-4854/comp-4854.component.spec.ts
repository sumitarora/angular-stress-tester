import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4854Component } from './comp-4854.component';

describe('Comp4854Component', () => {
  let component: Comp4854Component;
  let fixture: ComponentFixture<Comp4854Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4854Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4854Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
