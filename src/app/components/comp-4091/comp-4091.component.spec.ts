import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4091Component } from './comp-4091.component';

describe('Comp4091Component', () => {
  let component: Comp4091Component;
  let fixture: ComponentFixture<Comp4091Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4091Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4091Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
