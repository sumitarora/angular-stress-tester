import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4415Component } from './comp-4415.component';

describe('Comp4415Component', () => {
  let component: Comp4415Component;
  let fixture: ComponentFixture<Comp4415Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4415Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4415Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
