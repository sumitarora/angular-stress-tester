import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4692Component } from './comp-4692.component';

describe('Comp4692Component', () => {
  let component: Comp4692Component;
  let fixture: ComponentFixture<Comp4692Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4692Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4692Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
