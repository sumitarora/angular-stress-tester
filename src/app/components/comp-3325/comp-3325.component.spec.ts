import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3325Component } from './comp-3325.component';

describe('Comp3325Component', () => {
  let component: Comp3325Component;
  let fixture: ComponentFixture<Comp3325Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3325Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3325Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
