import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4253Component } from './comp-4253.component';

describe('Comp4253Component', () => {
  let component: Comp4253Component;
  let fixture: ComponentFixture<Comp4253Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4253Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
