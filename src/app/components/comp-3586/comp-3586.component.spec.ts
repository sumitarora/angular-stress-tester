import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3586Component } from './comp-3586.component';

describe('Comp3586Component', () => {
  let component: Comp3586Component;
  let fixture: ComponentFixture<Comp3586Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3586Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3586Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
