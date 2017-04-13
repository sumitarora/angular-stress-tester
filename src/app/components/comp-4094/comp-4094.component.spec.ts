import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4094Component } from './comp-4094.component';

describe('Comp4094Component', () => {
  let component: Comp4094Component;
  let fixture: ComponentFixture<Comp4094Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4094Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4094Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
