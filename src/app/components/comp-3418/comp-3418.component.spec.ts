import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3418Component } from './comp-3418.component';

describe('Comp3418Component', () => {
  let component: Comp3418Component;
  let fixture: ComponentFixture<Comp3418Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3418Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3418Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
