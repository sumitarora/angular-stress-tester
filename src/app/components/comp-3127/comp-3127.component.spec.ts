import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3127Component } from './comp-3127.component';

describe('Comp3127Component', () => {
  let component: Comp3127Component;
  let fixture: ComponentFixture<Comp3127Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3127Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
