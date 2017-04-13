import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4841Component } from './comp-4841.component';

describe('Comp4841Component', () => {
  let component: Comp4841Component;
  let fixture: ComponentFixture<Comp4841Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4841Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4841Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
