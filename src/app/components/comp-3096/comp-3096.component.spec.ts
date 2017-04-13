import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3096Component } from './comp-3096.component';

describe('Comp3096Component', () => {
  let component: Comp3096Component;
  let fixture: ComponentFixture<Comp3096Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3096Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3096Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
