import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3856Component } from './comp-3856.component';

describe('Comp3856Component', () => {
  let component: Comp3856Component;
  let fixture: ComponentFixture<Comp3856Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3856Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3856Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
