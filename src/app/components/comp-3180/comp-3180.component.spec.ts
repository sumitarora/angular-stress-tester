import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3180Component } from './comp-3180.component';

describe('Comp3180Component', () => {
  let component: Comp3180Component;
  let fixture: ComponentFixture<Comp3180Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3180Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
