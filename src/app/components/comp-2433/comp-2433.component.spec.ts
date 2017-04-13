import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2433Component } from './comp-2433.component';

describe('Comp2433Component', () => {
  let component: Comp2433Component;
  let fixture: ComponentFixture<Comp2433Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2433Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2433Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
