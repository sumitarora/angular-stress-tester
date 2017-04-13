import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3196Component } from './comp-3196.component';

describe('Comp3196Component', () => {
  let component: Comp3196Component;
  let fixture: ComponentFixture<Comp3196Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3196Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
