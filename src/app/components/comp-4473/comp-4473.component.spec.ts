import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4473Component } from './comp-4473.component';

describe('Comp4473Component', () => {
  let component: Comp4473Component;
  let fixture: ComponentFixture<Comp4473Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4473Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4473Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
