import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4022Component } from './comp-4022.component';

describe('Comp4022Component', () => {
  let component: Comp4022Component;
  let fixture: ComponentFixture<Comp4022Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4022Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
