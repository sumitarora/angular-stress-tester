import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4240Component } from './comp-4240.component';

describe('Comp4240Component', () => {
  let component: Comp4240Component;
  let fixture: ComponentFixture<Comp4240Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4240Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
