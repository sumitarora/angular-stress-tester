import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3475Component } from './comp-3475.component';

describe('Comp3475Component', () => {
  let component: Comp3475Component;
  let fixture: ComponentFixture<Comp3475Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3475Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3475Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
