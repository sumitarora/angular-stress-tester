import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3245Component } from './comp-3245.component';

describe('Comp3245Component', () => {
  let component: Comp3245Component;
  let fixture: ComponentFixture<Comp3245Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3245Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
