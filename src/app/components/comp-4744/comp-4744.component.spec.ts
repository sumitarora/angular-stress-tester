import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4744Component } from './comp-4744.component';

describe('Comp4744Component', () => {
  let component: Comp4744Component;
  let fixture: ComponentFixture<Comp4744Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4744Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4744Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
