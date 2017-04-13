import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2363Component } from './comp-2363.component';

describe('Comp2363Component', () => {
  let component: Comp2363Component;
  let fixture: ComponentFixture<Comp2363Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2363Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
