import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4753Component } from './comp-4753.component';

describe('Comp4753Component', () => {
  let component: Comp4753Component;
  let fixture: ComponentFixture<Comp4753Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4753Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4753Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
