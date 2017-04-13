import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3197Component } from './comp-3197.component';

describe('Comp3197Component', () => {
  let component: Comp3197Component;
  let fixture: ComponentFixture<Comp3197Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3197Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
