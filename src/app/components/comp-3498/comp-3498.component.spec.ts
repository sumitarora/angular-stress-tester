import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3498Component } from './comp-3498.component';

describe('Comp3498Component', () => {
  let component: Comp3498Component;
  let fixture: ComponentFixture<Comp3498Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3498Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3498Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
