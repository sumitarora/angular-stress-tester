import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4775Component } from './comp-4775.component';

describe('Comp4775Component', () => {
  let component: Comp4775Component;
  let fixture: ComponentFixture<Comp4775Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4775Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4775Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
