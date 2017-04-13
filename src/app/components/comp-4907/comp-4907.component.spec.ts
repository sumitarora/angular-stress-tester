import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4907Component } from './comp-4907.component';

describe('Comp4907Component', () => {
  let component: Comp4907Component;
  let fixture: ComponentFixture<Comp4907Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4907Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
