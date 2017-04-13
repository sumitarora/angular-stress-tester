import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3080Component } from './comp-3080.component';

describe('Comp3080Component', () => {
  let component: Comp3080Component;
  let fixture: ComponentFixture<Comp3080Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3080Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3080Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
