import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4808Component } from './comp-4808.component';

describe('Comp4808Component', () => {
  let component: Comp4808Component;
  let fixture: ComponentFixture<Comp4808Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4808Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4808Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
