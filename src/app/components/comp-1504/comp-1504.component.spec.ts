import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1504Component } from './comp-1504.component';

describe('Comp1504Component', () => {
  let component: Comp1504Component;
  let fixture: ComponentFixture<Comp1504Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1504Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1504Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
