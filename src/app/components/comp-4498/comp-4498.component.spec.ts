import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4498Component } from './comp-4498.component';

describe('Comp4498Component', () => {
  let component: Comp4498Component;
  let fixture: ComponentFixture<Comp4498Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4498Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4498Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
