import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3927Component } from './comp-3927.component';

describe('Comp3927Component', () => {
  let component: Comp3927Component;
  let fixture: ComponentFixture<Comp3927Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3927Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3927Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
