import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4700Component } from './comp-4700.component';

describe('Comp4700Component', () => {
  let component: Comp4700Component;
  let fixture: ComponentFixture<Comp4700Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4700Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
