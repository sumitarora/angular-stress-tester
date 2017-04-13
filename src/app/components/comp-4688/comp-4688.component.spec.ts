import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4688Component } from './comp-4688.component';

describe('Comp4688Component', () => {
  let component: Comp4688Component;
  let fixture: ComponentFixture<Comp4688Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4688Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4688Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
