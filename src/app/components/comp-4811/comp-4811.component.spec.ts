import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4811Component } from './comp-4811.component';

describe('Comp4811Component', () => {
  let component: Comp4811Component;
  let fixture: ComponentFixture<Comp4811Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4811Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4811Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
