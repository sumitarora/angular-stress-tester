import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3547Component } from './comp-3547.component';

describe('Comp3547Component', () => {
  let component: Comp3547Component;
  let fixture: ComponentFixture<Comp3547Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3547Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3547Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
