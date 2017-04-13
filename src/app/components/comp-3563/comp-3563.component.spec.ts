import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3563Component } from './comp-3563.component';

describe('Comp3563Component', () => {
  let component: Comp3563Component;
  let fixture: ComponentFixture<Comp3563Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3563Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3563Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
