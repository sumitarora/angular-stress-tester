import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4138Component } from './comp-4138.component';

describe('Comp4138Component', () => {
  let component: Comp4138Component;
  let fixture: ComponentFixture<Comp4138Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4138Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
