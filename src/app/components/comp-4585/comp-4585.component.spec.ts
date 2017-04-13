import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4585Component } from './comp-4585.component';

describe('Comp4585Component', () => {
  let component: Comp4585Component;
  let fixture: ComponentFixture<Comp4585Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4585Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4585Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
