import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp109Component } from './comp-109.component';

describe('Comp109Component', () => {
  let component: Comp109Component;
  let fixture: ComponentFixture<Comp109Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp109Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
