import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4016Component } from './comp-4016.component';

describe('Comp4016Component', () => {
  let component: Comp4016Component;
  let fixture: ComponentFixture<Comp4016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
