import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3246Component } from './comp-3246.component';

describe('Comp3246Component', () => {
  let component: Comp3246Component;
  let fixture: ComponentFixture<Comp3246Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3246Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
