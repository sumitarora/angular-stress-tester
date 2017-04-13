import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3757Component } from './comp-3757.component';

describe('Comp3757Component', () => {
  let component: Comp3757Component;
  let fixture: ComponentFixture<Comp3757Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3757Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3757Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
