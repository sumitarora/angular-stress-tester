import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2370Component } from './comp-2370.component';

describe('Comp2370Component', () => {
  let component: Comp2370Component;
  let fixture: ComponentFixture<Comp2370Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2370Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2370Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
