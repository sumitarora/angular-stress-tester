import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4995Component } from './comp-4995.component';

describe('Comp4995Component', () => {
  let component: Comp4995Component;
  let fixture: ComponentFixture<Comp4995Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4995Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4995Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
