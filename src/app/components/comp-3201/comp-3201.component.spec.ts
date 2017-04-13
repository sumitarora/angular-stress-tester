import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3201Component } from './comp-3201.component';

describe('Comp3201Component', () => {
  let component: Comp3201Component;
  let fixture: ComponentFixture<Comp3201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
