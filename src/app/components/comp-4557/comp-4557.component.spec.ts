import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4557Component } from './comp-4557.component';

describe('Comp4557Component', () => {
  let component: Comp4557Component;
  let fixture: ComponentFixture<Comp4557Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4557Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4557Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
