import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3040Component } from './comp-3040.component';

describe('Comp3040Component', () => {
  let component: Comp3040Component;
  let fixture: ComponentFixture<Comp3040Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3040Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3040Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
