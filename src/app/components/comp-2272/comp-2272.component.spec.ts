import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2272Component } from './comp-2272.component';

describe('Comp2272Component', () => {
  let component: Comp2272Component;
  let fixture: ComponentFixture<Comp2272Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2272Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2272Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
