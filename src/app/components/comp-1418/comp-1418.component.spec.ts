import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1418Component } from './comp-1418.component';

describe('Comp1418Component', () => {
  let component: Comp1418Component;
  let fixture: ComponentFixture<Comp1418Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1418Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1418Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
