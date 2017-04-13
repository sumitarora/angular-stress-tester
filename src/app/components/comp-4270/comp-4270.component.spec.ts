import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4270Component } from './comp-4270.component';

describe('Comp4270Component', () => {
  let component: Comp4270Component;
  let fixture: ComponentFixture<Comp4270Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4270Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
