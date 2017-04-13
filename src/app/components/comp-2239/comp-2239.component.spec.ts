import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2239Component } from './comp-2239.component';

describe('Comp2239Component', () => {
  let component: Comp2239Component;
  let fixture: ComponentFixture<Comp2239Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2239Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
