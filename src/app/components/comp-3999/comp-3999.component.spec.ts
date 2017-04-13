import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3999Component } from './comp-3999.component';

describe('Comp3999Component', () => {
  let component: Comp3999Component;
  let fixture: ComponentFixture<Comp3999Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3999Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3999Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
