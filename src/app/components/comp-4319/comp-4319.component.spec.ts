import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4319Component } from './comp-4319.component';

describe('Comp4319Component', () => {
  let component: Comp4319Component;
  let fixture: ComponentFixture<Comp4319Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4319Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4319Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
