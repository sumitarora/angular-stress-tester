import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4677Component } from './comp-4677.component';

describe('Comp4677Component', () => {
  let component: Comp4677Component;
  let fixture: ComponentFixture<Comp4677Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4677Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4677Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
