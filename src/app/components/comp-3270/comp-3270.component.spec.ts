import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3270Component } from './comp-3270.component';

describe('Comp3270Component', () => {
  let component: Comp3270Component;
  let fixture: ComponentFixture<Comp3270Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3270Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
