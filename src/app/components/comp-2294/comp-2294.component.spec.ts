import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2294Component } from './comp-2294.component';

describe('Comp2294Component', () => {
  let component: Comp2294Component;
  let fixture: ComponentFixture<Comp2294Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2294Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2294Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
