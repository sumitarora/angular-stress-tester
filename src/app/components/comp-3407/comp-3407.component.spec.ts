import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3407Component } from './comp-3407.component';

describe('Comp3407Component', () => {
  let component: Comp3407Component;
  let fixture: ComponentFixture<Comp3407Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3407Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3407Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
