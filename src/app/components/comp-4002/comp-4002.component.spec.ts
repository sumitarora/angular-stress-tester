import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4002Component } from './comp-4002.component';

describe('Comp4002Component', () => {
  let component: Comp4002Component;
  let fixture: ComponentFixture<Comp4002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
