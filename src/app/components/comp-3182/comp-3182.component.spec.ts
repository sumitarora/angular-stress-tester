import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3182Component } from './comp-3182.component';

describe('Comp3182Component', () => {
  let component: Comp3182Component;
  let fixture: ComponentFixture<Comp3182Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3182Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3182Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
