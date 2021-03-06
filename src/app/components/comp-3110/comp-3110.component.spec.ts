import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3110Component } from './comp-3110.component';

describe('Comp3110Component', () => {
  let component: Comp3110Component;
  let fixture: ComponentFixture<Comp3110Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3110Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
