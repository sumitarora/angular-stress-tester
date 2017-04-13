import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3604Component } from './comp-3604.component';

describe('Comp3604Component', () => {
  let component: Comp3604Component;
  let fixture: ComponentFixture<Comp3604Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3604Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3604Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
