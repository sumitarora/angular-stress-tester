import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3814Component } from './comp-3814.component';

describe('Comp3814Component', () => {
  let component: Comp3814Component;
  let fixture: ComponentFixture<Comp3814Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3814Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3814Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
