import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2885Component } from './comp-2885.component';

describe('Comp2885Component', () => {
  let component: Comp2885Component;
  let fixture: ComponentFixture<Comp2885Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2885Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2885Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
