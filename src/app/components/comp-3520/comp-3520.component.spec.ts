import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3520Component } from './comp-3520.component';

describe('Comp3520Component', () => {
  let component: Comp3520Component;
  let fixture: ComponentFixture<Comp3520Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3520Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3520Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
