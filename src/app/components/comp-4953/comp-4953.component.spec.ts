import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4953Component } from './comp-4953.component';

describe('Comp4953Component', () => {
  let component: Comp4953Component;
  let fixture: ComponentFixture<Comp4953Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4953Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4953Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
