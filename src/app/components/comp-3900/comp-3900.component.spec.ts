import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3900Component } from './comp-3900.component';

describe('Comp3900Component', () => {
  let component: Comp3900Component;
  let fixture: ComponentFixture<Comp3900Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3900Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3900Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
