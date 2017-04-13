import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3188Component } from './comp-3188.component';

describe('Comp3188Component', () => {
  let component: Comp3188Component;
  let fixture: ComponentFixture<Comp3188Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3188Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
