import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2926Component } from './comp-2926.component';

describe('Comp2926Component', () => {
  let component: Comp2926Component;
  let fixture: ComponentFixture<Comp2926Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2926Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2926Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
