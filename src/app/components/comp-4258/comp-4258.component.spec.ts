import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4258Component } from './comp-4258.component';

describe('Comp4258Component', () => {
  let component: Comp4258Component;
  let fixture: ComponentFixture<Comp4258Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4258Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
