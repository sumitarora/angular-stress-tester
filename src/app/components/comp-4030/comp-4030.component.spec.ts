import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4030Component } from './comp-4030.component';

describe('Comp4030Component', () => {
  let component: Comp4030Component;
  let fixture: ComponentFixture<Comp4030Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4030Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4030Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
