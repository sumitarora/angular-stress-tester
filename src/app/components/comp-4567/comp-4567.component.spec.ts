import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4567Component } from './comp-4567.component';

describe('Comp4567Component', () => {
  let component: Comp4567Component;
  let fixture: ComponentFixture<Comp4567Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4567Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4567Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
