import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2352Component } from './comp-2352.component';

describe('Comp2352Component', () => {
  let component: Comp2352Component;
  let fixture: ComponentFixture<Comp2352Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2352Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
