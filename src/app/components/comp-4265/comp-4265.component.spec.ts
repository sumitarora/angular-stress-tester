import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4265Component } from './comp-4265.component';

describe('Comp4265Component', () => {
  let component: Comp4265Component;
  let fixture: ComponentFixture<Comp4265Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4265Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
