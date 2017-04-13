import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4978Component } from './comp-4978.component';

describe('Comp4978Component', () => {
  let component: Comp4978Component;
  let fixture: ComponentFixture<Comp4978Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4978Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4978Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
