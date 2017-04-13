import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2952Component } from './comp-2952.component';

describe('Comp2952Component', () => {
  let component: Comp2952Component;
  let fixture: ComponentFixture<Comp2952Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2952Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2952Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
