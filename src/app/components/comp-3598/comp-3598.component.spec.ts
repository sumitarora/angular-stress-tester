import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3598Component } from './comp-3598.component';

describe('Comp3598Component', () => {
  let component: Comp3598Component;
  let fixture: ComponentFixture<Comp3598Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3598Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3598Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
