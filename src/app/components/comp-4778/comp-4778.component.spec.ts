import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4778Component } from './comp-4778.component';

describe('Comp4778Component', () => {
  let component: Comp4778Component;
  let fixture: ComponentFixture<Comp4778Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4778Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4778Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
