import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4121Component } from './comp-4121.component';

describe('Comp4121Component', () => {
  let component: Comp4121Component;
  let fixture: ComponentFixture<Comp4121Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4121Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
