import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4129Component } from './comp-4129.component';

describe('Comp4129Component', () => {
  let component: Comp4129Component;
  let fixture: ComponentFixture<Comp4129Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4129Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
