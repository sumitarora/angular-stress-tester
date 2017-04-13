import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3525Component } from './comp-3525.component';

describe('Comp3525Component', () => {
  let component: Comp3525Component;
  let fixture: ComponentFixture<Comp3525Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3525Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3525Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
