import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3219Component } from './comp-3219.component';

describe('Comp3219Component', () => {
  let component: Comp3219Component;
  let fixture: ComponentFixture<Comp3219Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3219Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
