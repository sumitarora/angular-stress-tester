import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4097Component } from './comp-4097.component';

describe('Comp4097Component', () => {
  let component: Comp4097Component;
  let fixture: ComponentFixture<Comp4097Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4097Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4097Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
