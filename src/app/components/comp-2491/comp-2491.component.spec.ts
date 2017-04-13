import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2491Component } from './comp-2491.component';

describe('Comp2491Component', () => {
  let component: Comp2491Component;
  let fixture: ComponentFixture<Comp2491Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2491Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2491Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
