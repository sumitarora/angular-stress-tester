import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4939Component } from './comp-4939.component';

describe('Comp4939Component', () => {
  let component: Comp4939Component;
  let fixture: ComponentFixture<Comp4939Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4939Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4939Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
