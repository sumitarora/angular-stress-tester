import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp94Component } from './comp-94.component';

describe('Comp94Component', () => {
  let component: Comp94Component;
  let fixture: ComponentFixture<Comp94Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp94Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp94Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
