import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3706Component } from './comp-3706.component';

describe('Comp3706Component', () => {
  let component: Comp3706Component;
  let fixture: ComponentFixture<Comp3706Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3706Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3706Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
