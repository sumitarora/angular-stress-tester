import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3879Component } from './comp-3879.component';

describe('Comp3879Component', () => {
  let component: Comp3879Component;
  let fixture: ComponentFixture<Comp3879Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3879Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3879Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
