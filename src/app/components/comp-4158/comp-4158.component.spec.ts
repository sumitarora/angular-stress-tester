import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4158Component } from './comp-4158.component';

describe('Comp4158Component', () => {
  let component: Comp4158Component;
  let fixture: ComponentFixture<Comp4158Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4158Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
