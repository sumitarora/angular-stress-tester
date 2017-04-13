import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4070Component } from './comp-4070.component';

describe('Comp4070Component', () => {
  let component: Comp4070Component;
  let fixture: ComponentFixture<Comp4070Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4070Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4070Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
