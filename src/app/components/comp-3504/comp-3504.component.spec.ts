import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3504Component } from './comp-3504.component';

describe('Comp3504Component', () => {
  let component: Comp3504Component;
  let fixture: ComponentFixture<Comp3504Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3504Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3504Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
