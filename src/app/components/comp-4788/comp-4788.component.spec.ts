import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4788Component } from './comp-4788.component';

describe('Comp4788Component', () => {
  let component: Comp4788Component;
  let fixture: ComponentFixture<Comp4788Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4788Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4788Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
