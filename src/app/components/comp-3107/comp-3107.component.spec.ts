import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3107Component } from './comp-3107.component';

describe('Comp3107Component', () => {
  let component: Comp3107Component;
  let fixture: ComponentFixture<Comp3107Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3107Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
