import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3652Component } from './comp-3652.component';

describe('Comp3652Component', () => {
  let component: Comp3652Component;
  let fixture: ComponentFixture<Comp3652Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3652Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3652Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
