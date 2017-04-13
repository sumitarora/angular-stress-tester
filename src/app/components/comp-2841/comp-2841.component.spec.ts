import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2841Component } from './comp-2841.component';

describe('Comp2841Component', () => {
  let component: Comp2841Component;
  let fixture: ComponentFixture<Comp2841Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2841Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2841Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
