import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4674Component } from './comp-4674.component';

describe('Comp4674Component', () => {
  let component: Comp4674Component;
  let fixture: ComponentFixture<Comp4674Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4674Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4674Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
