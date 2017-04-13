import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4018Component } from './comp-4018.component';

describe('Comp4018Component', () => {
  let component: Comp4018Component;
  let fixture: ComponentFixture<Comp4018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
