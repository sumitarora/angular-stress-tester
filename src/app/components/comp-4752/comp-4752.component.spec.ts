import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4752Component } from './comp-4752.component';

describe('Comp4752Component', () => {
  let component: Comp4752Component;
  let fixture: ComponentFixture<Comp4752Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4752Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4752Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
