import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4842Component } from './comp-4842.component';

describe('Comp4842Component', () => {
  let component: Comp4842Component;
  let fixture: ComponentFixture<Comp4842Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4842Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4842Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
