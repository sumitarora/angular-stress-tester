import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3799Component } from './comp-3799.component';

describe('Comp3799Component', () => {
  let component: Comp3799Component;
  let fixture: ComponentFixture<Comp3799Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3799Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3799Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
