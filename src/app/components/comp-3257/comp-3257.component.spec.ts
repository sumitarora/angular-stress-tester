import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3257Component } from './comp-3257.component';

describe('Comp3257Component', () => {
  let component: Comp3257Component;
  let fixture: ComponentFixture<Comp3257Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3257Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
