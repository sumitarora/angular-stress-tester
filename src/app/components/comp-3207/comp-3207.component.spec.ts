import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3207Component } from './comp-3207.component';

describe('Comp3207Component', () => {
  let component: Comp3207Component;
  let fixture: ComponentFixture<Comp3207Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3207Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
