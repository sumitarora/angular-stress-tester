import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp785Component } from './comp-785.component';

describe('Comp785Component', () => {
  let component: Comp785Component;
  let fixture: ComponentFixture<Comp785Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp785Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp785Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
