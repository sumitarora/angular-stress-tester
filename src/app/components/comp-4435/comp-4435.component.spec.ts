import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4435Component } from './comp-4435.component';

describe('Comp4435Component', () => {
  let component: Comp4435Component;
  let fixture: ComponentFixture<Comp4435Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4435Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4435Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
