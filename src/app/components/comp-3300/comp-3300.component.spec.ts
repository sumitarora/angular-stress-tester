import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3300Component } from './comp-3300.component';

describe('Comp3300Component', () => {
  let component: Comp3300Component;
  let fixture: ComponentFixture<Comp3300Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3300Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
