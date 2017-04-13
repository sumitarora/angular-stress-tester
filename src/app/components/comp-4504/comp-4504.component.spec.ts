import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4504Component } from './comp-4504.component';

describe('Comp4504Component', () => {
  let component: Comp4504Component;
  let fixture: ComponentFixture<Comp4504Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4504Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4504Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
