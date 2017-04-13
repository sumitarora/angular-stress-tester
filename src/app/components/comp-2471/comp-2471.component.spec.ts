import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2471Component } from './comp-2471.component';

describe('Comp2471Component', () => {
  let component: Comp2471Component;
  let fixture: ComponentFixture<Comp2471Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2471Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2471Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
