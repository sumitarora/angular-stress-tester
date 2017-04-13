import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3923Component } from './comp-3923.component';

describe('Comp3923Component', () => {
  let component: Comp3923Component;
  let fixture: ComponentFixture<Comp3923Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3923Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3923Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
