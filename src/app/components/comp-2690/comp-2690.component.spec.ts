import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2690Component } from './comp-2690.component';

describe('Comp2690Component', () => {
  let component: Comp2690Component;
  let fixture: ComponentFixture<Comp2690Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2690Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2690Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
