import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3035Component } from './comp-3035.component';

describe('Comp3035Component', () => {
  let component: Comp3035Component;
  let fixture: ComponentFixture<Comp3035Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3035Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3035Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
