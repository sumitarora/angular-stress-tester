import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3296Component } from './comp-3296.component';

describe('Comp3296Component', () => {
  let component: Comp3296Component;
  let fixture: ComponentFixture<Comp3296Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3296Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3296Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
