import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3924Component } from './comp-3924.component';

describe('Comp3924Component', () => {
  let component: Comp3924Component;
  let fixture: ComponentFixture<Comp3924Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3924Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3924Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
