import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp977Component } from './comp-977.component';

describe('Comp977Component', () => {
  let component: Comp977Component;
  let fixture: ComponentFixture<Comp977Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp977Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp977Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
