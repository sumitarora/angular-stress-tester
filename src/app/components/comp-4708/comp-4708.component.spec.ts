import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4708Component } from './comp-4708.component';

describe('Comp4708Component', () => {
  let component: Comp4708Component;
  let fixture: ComponentFixture<Comp4708Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4708Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4708Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
