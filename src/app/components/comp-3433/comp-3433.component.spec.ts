import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3433Component } from './comp-3433.component';

describe('Comp3433Component', () => {
  let component: Comp3433Component;
  let fixture: ComponentFixture<Comp3433Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3433Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3433Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
