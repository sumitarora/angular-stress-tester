import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4476Component } from './comp-4476.component';

describe('Comp4476Component', () => {
  let component: Comp4476Component;
  let fixture: ComponentFixture<Comp4476Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4476Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4476Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
