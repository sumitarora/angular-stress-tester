import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3880Component } from './comp-3880.component';

describe('Comp3880Component', () => {
  let component: Comp3880Component;
  let fixture: ComponentFixture<Comp3880Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3880Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3880Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
