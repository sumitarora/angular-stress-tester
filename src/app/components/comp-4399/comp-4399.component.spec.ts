import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4399Component } from './comp-4399.component';

describe('Comp4399Component', () => {
  let component: Comp4399Component;
  let fixture: ComponentFixture<Comp4399Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4399Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
