import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3904Component } from './comp-3904.component';

describe('Comp3904Component', () => {
  let component: Comp3904Component;
  let fixture: ComponentFixture<Comp3904Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3904Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3904Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
