import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4838Component } from './comp-4838.component';

describe('Comp4838Component', () => {
  let component: Comp4838Component;
  let fixture: ComponentFixture<Comp4838Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4838Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4838Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
