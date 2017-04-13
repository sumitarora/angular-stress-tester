import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4616Component } from './comp-4616.component';

describe('Comp4616Component', () => {
  let component: Comp4616Component;
  let fixture: ComponentFixture<Comp4616Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4616Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4616Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
