import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3864Component } from './comp-3864.component';

describe('Comp3864Component', () => {
  let component: Comp3864Component;
  let fixture: ComponentFixture<Comp3864Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3864Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3864Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
