import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4924Component } from './comp-4924.component';

describe('Comp4924Component', () => {
  let component: Comp4924Component;
  let fixture: ComponentFixture<Comp4924Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4924Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4924Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
