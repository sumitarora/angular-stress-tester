import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4499Component } from './comp-4499.component';

describe('Comp4499Component', () => {
  let component: Comp4499Component;
  let fixture: ComponentFixture<Comp4499Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4499Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4499Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
