import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4176Component } from './comp-4176.component';

describe('Comp4176Component', () => {
  let component: Comp4176Component;
  let fixture: ComponentFixture<Comp4176Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4176Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
