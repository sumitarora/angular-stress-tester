import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4358Component } from './comp-4358.component';

describe('Comp4358Component', () => {
  let component: Comp4358Component;
  let fixture: ComponentFixture<Comp4358Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4358Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4358Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
