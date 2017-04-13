import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4084Component } from './comp-4084.component';

describe('Comp4084Component', () => {
  let component: Comp4084Component;
  let fixture: ComponentFixture<Comp4084Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4084Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4084Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
