import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4496Component } from './comp-4496.component';

describe('Comp4496Component', () => {
  let component: Comp4496Component;
  let fixture: ComponentFixture<Comp4496Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4496Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4496Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
