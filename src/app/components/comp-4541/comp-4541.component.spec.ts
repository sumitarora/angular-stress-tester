import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4541Component } from './comp-4541.component';

describe('Comp4541Component', () => {
  let component: Comp4541Component;
  let fixture: ComponentFixture<Comp4541Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4541Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4541Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
