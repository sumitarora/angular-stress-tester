import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3248Component } from './comp-3248.component';

describe('Comp3248Component', () => {
  let component: Comp3248Component;
  let fixture: ComponentFixture<Comp3248Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3248Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3248Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
