import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4359Component } from './comp-4359.component';

describe('Comp4359Component', () => {
  let component: Comp4359Component;
  let fixture: ComponentFixture<Comp4359Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4359Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4359Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
