import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2794Component } from './comp-2794.component';

describe('Comp2794Component', () => {
  let component: Comp2794Component;
  let fixture: ComponentFixture<Comp2794Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2794Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2794Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
