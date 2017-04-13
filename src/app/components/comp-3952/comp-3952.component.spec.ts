import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3952Component } from './comp-3952.component';

describe('Comp3952Component', () => {
  let component: Comp3952Component;
  let fixture: ComponentFixture<Comp3952Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3952Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3952Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
