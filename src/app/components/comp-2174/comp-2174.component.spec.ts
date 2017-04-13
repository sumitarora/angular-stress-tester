import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2174Component } from './comp-2174.component';

describe('Comp2174Component', () => {
  let component: Comp2174Component;
  let fixture: ComponentFixture<Comp2174Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2174Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
