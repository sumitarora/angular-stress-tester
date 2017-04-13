import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3008Component } from './comp-3008.component';

describe('Comp3008Component', () => {
  let component: Comp3008Component;
  let fixture: ComponentFixture<Comp3008Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3008Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
