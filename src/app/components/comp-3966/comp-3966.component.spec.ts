import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3966Component } from './comp-3966.component';

describe('Comp3966Component', () => {
  let component: Comp3966Component;
  let fixture: ComponentFixture<Comp3966Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3966Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3966Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
