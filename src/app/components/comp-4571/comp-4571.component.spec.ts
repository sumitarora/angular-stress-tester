import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4571Component } from './comp-4571.component';

describe('Comp4571Component', () => {
  let component: Comp4571Component;
  let fixture: ComponentFixture<Comp4571Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4571Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4571Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
