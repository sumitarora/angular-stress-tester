import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3090Component } from './comp-3090.component';

describe('Comp3090Component', () => {
  let component: Comp3090Component;
  let fixture: ComponentFixture<Comp3090Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3090Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3090Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
