import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3603Component } from './comp-3603.component';

describe('Comp3603Component', () => {
  let component: Comp3603Component;
  let fixture: ComponentFixture<Comp3603Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3603Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3603Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
