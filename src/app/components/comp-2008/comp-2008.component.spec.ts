import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2008Component } from './comp-2008.component';

describe('Comp2008Component', () => {
  let component: Comp2008Component;
  let fixture: ComponentFixture<Comp2008Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2008Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
