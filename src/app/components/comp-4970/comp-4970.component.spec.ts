import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4970Component } from './comp-4970.component';

describe('Comp4970Component', () => {
  let component: Comp4970Component;
  let fixture: ComponentFixture<Comp4970Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4970Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4970Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
