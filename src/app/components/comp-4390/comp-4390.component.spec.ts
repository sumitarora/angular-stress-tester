import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4390Component } from './comp-4390.component';

describe('Comp4390Component', () => {
  let component: Comp4390Component;
  let fixture: ComponentFixture<Comp4390Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4390Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4390Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
