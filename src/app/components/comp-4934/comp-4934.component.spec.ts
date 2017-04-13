import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4934Component } from './comp-4934.component';

describe('Comp4934Component', () => {
  let component: Comp4934Component;
  let fixture: ComponentFixture<Comp4934Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4934Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4934Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
