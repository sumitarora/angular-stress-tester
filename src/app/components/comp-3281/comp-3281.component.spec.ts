import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3281Component } from './comp-3281.component';

describe('Comp3281Component', () => {
  let component: Comp3281Component;
  let fixture: ComponentFixture<Comp3281Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3281Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
