import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4250Component } from './comp-4250.component';

describe('Comp4250Component', () => {
  let component: Comp4250Component;
  let fixture: ComponentFixture<Comp4250Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4250Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
