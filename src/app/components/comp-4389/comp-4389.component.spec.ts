import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4389Component } from './comp-4389.component';

describe('Comp4389Component', () => {
  let component: Comp4389Component;
  let fixture: ComponentFixture<Comp4389Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4389Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4389Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
