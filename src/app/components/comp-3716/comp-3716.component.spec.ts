import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3716Component } from './comp-3716.component';

describe('Comp3716Component', () => {
  let component: Comp3716Component;
  let fixture: ComponentFixture<Comp3716Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3716Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3716Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
