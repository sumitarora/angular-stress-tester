import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3789Component } from './comp-3789.component';

describe('Comp3789Component', () => {
  let component: Comp3789Component;
  let fixture: ComponentFixture<Comp3789Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3789Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3789Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
