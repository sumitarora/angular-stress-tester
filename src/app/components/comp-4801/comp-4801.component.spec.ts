import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4801Component } from './comp-4801.component';

describe('Comp4801Component', () => {
  let component: Comp4801Component;
  let fixture: ComponentFixture<Comp4801Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4801Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4801Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
