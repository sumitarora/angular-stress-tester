import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3587Component } from './comp-3587.component';

describe('Comp3587Component', () => {
  let component: Comp3587Component;
  let fixture: ComponentFixture<Comp3587Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3587Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3587Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
