import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3602Component } from './comp-3602.component';

describe('Comp3602Component', () => {
  let component: Comp3602Component;
  let fixture: ComponentFixture<Comp3602Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3602Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3602Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
