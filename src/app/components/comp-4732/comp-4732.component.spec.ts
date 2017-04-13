import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4732Component } from './comp-4732.component';

describe('Comp4732Component', () => {
  let component: Comp4732Component;
  let fixture: ComponentFixture<Comp4732Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4732Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4732Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
