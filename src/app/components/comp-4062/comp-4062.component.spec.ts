import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4062Component } from './comp-4062.component';

describe('Comp4062Component', () => {
  let component: Comp4062Component;
  let fixture: ComponentFixture<Comp4062Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4062Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4062Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
