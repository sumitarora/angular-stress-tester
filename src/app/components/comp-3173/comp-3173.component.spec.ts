import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3173Component } from './comp-3173.component';

describe('Comp3173Component', () => {
  let component: Comp3173Component;
  let fixture: ComponentFixture<Comp3173Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3173Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
