import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4451Component } from './comp-4451.component';

describe('Comp4451Component', () => {
  let component: Comp4451Component;
  let fixture: ComponentFixture<Comp4451Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4451Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4451Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
