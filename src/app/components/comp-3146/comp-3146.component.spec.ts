import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3146Component } from './comp-3146.component';

describe('Comp3146Component', () => {
  let component: Comp3146Component;
  let fixture: ComponentFixture<Comp3146Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3146Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
