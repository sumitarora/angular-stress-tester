import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3193Component } from './comp-3193.component';

describe('Comp3193Component', () => {
  let component: Comp3193Component;
  let fixture: ComponentFixture<Comp3193Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3193Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
