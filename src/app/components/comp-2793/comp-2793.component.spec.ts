import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2793Component } from './comp-2793.component';

describe('Comp2793Component', () => {
  let component: Comp2793Component;
  let fixture: ComponentFixture<Comp2793Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2793Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2793Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
