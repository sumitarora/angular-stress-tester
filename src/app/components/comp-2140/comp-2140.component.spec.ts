import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2140Component } from './comp-2140.component';

describe('Comp2140Component', () => {
  let component: Comp2140Component;
  let fixture: ComponentFixture<Comp2140Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2140Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
