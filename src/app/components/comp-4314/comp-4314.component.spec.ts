import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4314Component } from './comp-4314.component';

describe('Comp4314Component', () => {
  let component: Comp4314Component;
  let fixture: ComponentFixture<Comp4314Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4314Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
