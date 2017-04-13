import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3862Component } from './comp-3862.component';

describe('Comp3862Component', () => {
  let component: Comp3862Component;
  let fixture: ComponentFixture<Comp3862Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3862Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3862Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
