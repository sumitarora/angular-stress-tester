import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3029Component } from './comp-3029.component';

describe('Comp3029Component', () => {
  let component: Comp3029Component;
  let fixture: ComponentFixture<Comp3029Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3029Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3029Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
