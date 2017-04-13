import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3929Component } from './comp-3929.component';

describe('Comp3929Component', () => {
  let component: Comp3929Component;
  let fixture: ComponentFixture<Comp3929Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3929Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3929Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
