import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3250Component } from './comp-3250.component';

describe('Comp3250Component', () => {
  let component: Comp3250Component;
  let fixture: ComponentFixture<Comp3250Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3250Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
