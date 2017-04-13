import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4715Component } from './comp-4715.component';

describe('Comp4715Component', () => {
  let component: Comp4715Component;
  let fixture: ComponentFixture<Comp4715Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4715Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4715Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
