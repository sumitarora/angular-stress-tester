import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3493Component } from './comp-3493.component';

describe('Comp3493Component', () => {
  let component: Comp3493Component;
  let fixture: ComponentFixture<Comp3493Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3493Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3493Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
