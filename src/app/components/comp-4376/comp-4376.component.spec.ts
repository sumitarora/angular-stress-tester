import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4376Component } from './comp-4376.component';

describe('Comp4376Component', () => {
  let component: Comp4376Component;
  let fixture: ComponentFixture<Comp4376Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4376Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4376Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
