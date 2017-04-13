import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3743Component } from './comp-3743.component';

describe('Comp3743Component', () => {
  let component: Comp3743Component;
  let fixture: ComponentFixture<Comp3743Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3743Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3743Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
