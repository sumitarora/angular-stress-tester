import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4603Component } from './comp-4603.component';

describe('Comp4603Component', () => {
  let component: Comp4603Component;
  let fixture: ComponentFixture<Comp4603Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4603Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4603Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
