import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3241Component } from './comp-3241.component';

describe('Comp3241Component', () => {
  let component: Comp3241Component;
  let fixture: ComponentFixture<Comp3241Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3241Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
