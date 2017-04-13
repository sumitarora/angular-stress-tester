import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4112Component } from './comp-4112.component';

describe('Comp4112Component', () => {
  let component: Comp4112Component;
  let fixture: ComponentFixture<Comp4112Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4112Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
