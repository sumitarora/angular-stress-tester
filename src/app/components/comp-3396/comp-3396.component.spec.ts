import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3396Component } from './comp-3396.component';

describe('Comp3396Component', () => {
  let component: Comp3396Component;
  let fixture: ComponentFixture<Comp3396Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3396Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3396Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
