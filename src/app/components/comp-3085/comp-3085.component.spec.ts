import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3085Component } from './comp-3085.component';

describe('Comp3085Component', () => {
  let component: Comp3085Component;
  let fixture: ComponentFixture<Comp3085Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3085Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3085Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
