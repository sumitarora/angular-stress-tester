import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2002Component } from './comp-2002.component';

describe('Comp2002Component', () => {
  let component: Comp2002Component;
  let fixture: ComponentFixture<Comp2002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
