import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4827Component } from './comp-4827.component';

describe('Comp4827Component', () => {
  let component: Comp4827Component;
  let fixture: ComponentFixture<Comp4827Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4827Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4827Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
