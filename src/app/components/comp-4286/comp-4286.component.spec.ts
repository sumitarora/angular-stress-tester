import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4286Component } from './comp-4286.component';

describe('Comp4286Component', () => {
  let component: Comp4286Component;
  let fixture: ComponentFixture<Comp4286Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4286Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4286Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
