import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3174Component } from './comp-3174.component';

describe('Comp3174Component', () => {
  let component: Comp3174Component;
  let fixture: ComponentFixture<Comp3174Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3174Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
