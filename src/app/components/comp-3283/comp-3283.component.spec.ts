import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3283Component } from './comp-3283.component';

describe('Comp3283Component', () => {
  let component: Comp3283Component;
  let fixture: ComponentFixture<Comp3283Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3283Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3283Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
