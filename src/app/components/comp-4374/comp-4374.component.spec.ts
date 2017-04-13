import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4374Component } from './comp-4374.component';

describe('Comp4374Component', () => {
  let component: Comp4374Component;
  let fixture: ComponentFixture<Comp4374Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4374Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4374Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
