import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3351Component } from './comp-3351.component';

describe('Comp3351Component', () => {
  let component: Comp3351Component;
  let fixture: ComponentFixture<Comp3351Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3351Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3351Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
