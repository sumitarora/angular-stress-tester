import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3959Component } from './comp-3959.component';

describe('Comp3959Component', () => {
  let component: Comp3959Component;
  let fixture: ComponentFixture<Comp3959Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3959Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3959Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
