import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4428Component } from './comp-4428.component';

describe('Comp4428Component', () => {
  let component: Comp4428Component;
  let fixture: ComponentFixture<Comp4428Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4428Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4428Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
