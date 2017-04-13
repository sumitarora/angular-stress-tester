import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4921Component } from './comp-4921.component';

describe('Comp4921Component', () => {
  let component: Comp4921Component;
  let fixture: ComponentFixture<Comp4921Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4921Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4921Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
