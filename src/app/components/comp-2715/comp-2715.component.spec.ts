import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2715Component } from './comp-2715.component';

describe('Comp2715Component', () => {
  let component: Comp2715Component;
  let fixture: ComponentFixture<Comp2715Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2715Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2715Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
