import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3762Component } from './comp-3762.component';

describe('Comp3762Component', () => {
  let component: Comp3762Component;
  let fixture: ComponentFixture<Comp3762Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3762Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3762Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
