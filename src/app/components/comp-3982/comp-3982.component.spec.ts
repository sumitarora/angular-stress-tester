import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3982Component } from './comp-3982.component';

describe('Comp3982Component', () => {
  let component: Comp3982Component;
  let fixture: ComponentFixture<Comp3982Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3982Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3982Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
