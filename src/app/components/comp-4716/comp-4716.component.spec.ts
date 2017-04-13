import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4716Component } from './comp-4716.component';

describe('Comp4716Component', () => {
  let component: Comp4716Component;
  let fixture: ComponentFixture<Comp4716Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4716Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4716Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
