import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3447Component } from './comp-3447.component';

describe('Comp3447Component', () => {
  let component: Comp3447Component;
  let fixture: ComponentFixture<Comp3447Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3447Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3447Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
