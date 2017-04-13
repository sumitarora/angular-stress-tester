import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4724Component } from './comp-4724.component';

describe('Comp4724Component', () => {
  let component: Comp4724Component;
  let fixture: ComponentFixture<Comp4724Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4724Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4724Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
