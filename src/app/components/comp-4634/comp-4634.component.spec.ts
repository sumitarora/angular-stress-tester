import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4634Component } from './comp-4634.component';

describe('Comp4634Component', () => {
  let component: Comp4634Component;
  let fixture: ComponentFixture<Comp4634Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4634Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4634Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
