import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4507Component } from './comp-4507.component';

describe('Comp4507Component', () => {
  let component: Comp4507Component;
  let fixture: ComponentFixture<Comp4507Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4507Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4507Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
