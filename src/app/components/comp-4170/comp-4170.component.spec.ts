import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4170Component } from './comp-4170.component';

describe('Comp4170Component', () => {
  let component: Comp4170Component;
  let fixture: ComponentFixture<Comp4170Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4170Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
