import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4079Component } from './comp-4079.component';

describe('Comp4079Component', () => {
  let component: Comp4079Component;
  let fixture: ComponentFixture<Comp4079Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4079Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4079Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
