import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4466Component } from './comp-4466.component';

describe('Comp4466Component', () => {
  let component: Comp4466Component;
  let fixture: ComponentFixture<Comp4466Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4466Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4466Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
