import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4864Component } from './comp-4864.component';

describe('Comp4864Component', () => {
  let component: Comp4864Component;
  let fixture: ComponentFixture<Comp4864Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4864Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4864Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
