import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4670Component } from './comp-4670.component';

describe('Comp4670Component', () => {
  let component: Comp4670Component;
  let fixture: ComponentFixture<Comp4670Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4670Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4670Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
