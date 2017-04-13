import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4140Component } from './comp-4140.component';

describe('Comp4140Component', () => {
  let component: Comp4140Component;
  let fixture: ComponentFixture<Comp4140Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4140Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
