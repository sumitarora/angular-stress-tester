import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3278Component } from './comp-3278.component';

describe('Comp3278Component', () => {
  let component: Comp3278Component;
  let fixture: ComponentFixture<Comp3278Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3278Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3278Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
