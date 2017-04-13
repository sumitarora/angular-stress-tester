import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4587Component } from './comp-4587.component';

describe('Comp4587Component', () => {
  let component: Comp4587Component;
  let fixture: ComponentFixture<Comp4587Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4587Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4587Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
