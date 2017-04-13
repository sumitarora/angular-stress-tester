import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3689Component } from './comp-3689.component';

describe('Comp3689Component', () => {
  let component: Comp3689Component;
  let fixture: ComponentFixture<Comp3689Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3689Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3689Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
