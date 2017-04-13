import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3846Component } from './comp-3846.component';

describe('Comp3846Component', () => {
  let component: Comp3846Component;
  let fixture: ComponentFixture<Comp3846Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3846Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3846Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
