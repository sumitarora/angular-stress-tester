import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3512Component } from './comp-3512.component';

describe('Comp3512Component', () => {
  let component: Comp3512Component;
  let fixture: ComponentFixture<Comp3512Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3512Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3512Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
