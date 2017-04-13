import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3269Component } from './comp-3269.component';

describe('Comp3269Component', () => {
  let component: Comp3269Component;
  let fixture: ComponentFixture<Comp3269Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3269Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3269Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
