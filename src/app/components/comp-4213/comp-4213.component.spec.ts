import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4213Component } from './comp-4213.component';

describe('Comp4213Component', () => {
  let component: Comp4213Component;
  let fixture: ComponentFixture<Comp4213Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4213Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
