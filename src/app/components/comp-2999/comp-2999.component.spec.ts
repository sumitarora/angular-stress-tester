import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2999Component } from './comp-2999.component';

describe('Comp2999Component', () => {
  let component: Comp2999Component;
  let fixture: ComponentFixture<Comp2999Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2999Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2999Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
