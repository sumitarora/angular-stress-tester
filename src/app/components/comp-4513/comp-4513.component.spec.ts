import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4513Component } from './comp-4513.component';

describe('Comp4513Component', () => {
  let component: Comp4513Component;
  let fixture: ComponentFixture<Comp4513Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4513Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4513Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
