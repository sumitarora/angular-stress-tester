import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3487Component } from './comp-3487.component';

describe('Comp3487Component', () => {
  let component: Comp3487Component;
  let fixture: ComponentFixture<Comp3487Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3487Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3487Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
