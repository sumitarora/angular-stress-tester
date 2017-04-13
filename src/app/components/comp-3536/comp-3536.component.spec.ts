import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3536Component } from './comp-3536.component';

describe('Comp3536Component', () => {
  let component: Comp3536Component;
  let fixture: ComponentFixture<Comp3536Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3536Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3536Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
