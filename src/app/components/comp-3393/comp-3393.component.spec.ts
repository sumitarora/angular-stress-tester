import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3393Component } from './comp-3393.component';

describe('Comp3393Component', () => {
  let component: Comp3393Component;
  let fixture: ComponentFixture<Comp3393Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3393Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3393Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
