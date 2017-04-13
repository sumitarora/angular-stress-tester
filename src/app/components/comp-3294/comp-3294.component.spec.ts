import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3294Component } from './comp-3294.component';

describe('Comp3294Component', () => {
  let component: Comp3294Component;
  let fixture: ComponentFixture<Comp3294Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3294Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3294Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
