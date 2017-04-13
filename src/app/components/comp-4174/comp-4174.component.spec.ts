import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4174Component } from './comp-4174.component';

describe('Comp4174Component', () => {
  let component: Comp4174Component;
  let fixture: ComponentFixture<Comp4174Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4174Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
