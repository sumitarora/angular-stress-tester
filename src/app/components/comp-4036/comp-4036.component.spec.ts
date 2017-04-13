import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4036Component } from './comp-4036.component';

describe('Comp4036Component', () => {
  let component: Comp4036Component;
  let fixture: ComponentFixture<Comp4036Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4036Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4036Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
