import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2344Component } from './comp-2344.component';

describe('Comp2344Component', () => {
  let component: Comp2344Component;
  let fixture: ComponentFixture<Comp2344Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2344Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
