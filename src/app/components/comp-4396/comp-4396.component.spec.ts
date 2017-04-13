import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4396Component } from './comp-4396.component';

describe('Comp4396Component', () => {
  let component: Comp4396Component;
  let fixture: ComponentFixture<Comp4396Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4396Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4396Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
