import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2067Component } from './comp-2067.component';

describe('Comp2067Component', () => {
  let component: Comp2067Component;
  let fixture: ComponentFixture<Comp2067Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2067Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2067Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
