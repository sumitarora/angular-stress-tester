import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2241Component } from './comp-2241.component';

describe('Comp2241Component', () => {
  let component: Comp2241Component;
  let fixture: ComponentFixture<Comp2241Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2241Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
