import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4287Component } from './comp-4287.component';

describe('Comp4287Component', () => {
  let component: Comp4287Component;
  let fixture: ComponentFixture<Comp4287Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4287Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4287Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
