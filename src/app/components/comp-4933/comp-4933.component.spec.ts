import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4933Component } from './comp-4933.component';

describe('Comp4933Component', () => {
  let component: Comp4933Component;
  let fixture: ComponentFixture<Comp4933Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4933Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4933Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
