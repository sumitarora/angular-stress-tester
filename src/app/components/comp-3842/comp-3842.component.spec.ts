import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3842Component } from './comp-3842.component';

describe('Comp3842Component', () => {
  let component: Comp3842Component;
  let fixture: ComponentFixture<Comp3842Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3842Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3842Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
