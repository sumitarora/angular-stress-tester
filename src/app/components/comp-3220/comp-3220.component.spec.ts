import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3220Component } from './comp-3220.component';

describe('Comp3220Component', () => {
  let component: Comp3220Component;
  let fixture: ComponentFixture<Comp3220Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3220Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
