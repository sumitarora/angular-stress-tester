import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4085Component } from './comp-4085.component';

describe('Comp4085Component', () => {
  let component: Comp4085Component;
  let fixture: ComponentFixture<Comp4085Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4085Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4085Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
