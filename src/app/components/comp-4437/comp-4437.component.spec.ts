import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4437Component } from './comp-4437.component';

describe('Comp4437Component', () => {
  let component: Comp4437Component;
  let fixture: ComponentFixture<Comp4437Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4437Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4437Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
