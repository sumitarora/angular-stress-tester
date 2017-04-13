import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4261Component } from './comp-4261.component';

describe('Comp4261Component', () => {
  let component: Comp4261Component;
  let fixture: ComponentFixture<Comp4261Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4261Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
