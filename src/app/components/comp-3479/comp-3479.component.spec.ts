import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3479Component } from './comp-3479.component';

describe('Comp3479Component', () => {
  let component: Comp3479Component;
  let fixture: ComponentFixture<Comp3479Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3479Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3479Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
