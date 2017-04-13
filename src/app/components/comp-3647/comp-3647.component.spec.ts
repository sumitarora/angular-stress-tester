import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3647Component } from './comp-3647.component';

describe('Comp3647Component', () => {
  let component: Comp3647Component;
  let fixture: ComponentFixture<Comp3647Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3647Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3647Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
