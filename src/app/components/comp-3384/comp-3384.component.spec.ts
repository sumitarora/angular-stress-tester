import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3384Component } from './comp-3384.component';

describe('Comp3384Component', () => {
  let component: Comp3384Component;
  let fixture: ComponentFixture<Comp3384Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3384Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3384Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
