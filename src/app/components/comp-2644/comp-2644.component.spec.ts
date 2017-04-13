import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2644Component } from './comp-2644.component';

describe('Comp2644Component', () => {
  let component: Comp2644Component;
  let fixture: ComponentFixture<Comp2644Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2644Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2644Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
