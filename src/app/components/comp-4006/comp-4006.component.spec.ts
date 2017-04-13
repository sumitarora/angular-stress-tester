import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4006Component } from './comp-4006.component';

describe('Comp4006Component', () => {
  let component: Comp4006Component;
  let fixture: ComponentFixture<Comp4006Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4006Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
