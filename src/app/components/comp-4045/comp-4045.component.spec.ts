import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4045Component } from './comp-4045.component';

describe('Comp4045Component', () => {
  let component: Comp4045Component;
  let fixture: ComponentFixture<Comp4045Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4045Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4045Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
