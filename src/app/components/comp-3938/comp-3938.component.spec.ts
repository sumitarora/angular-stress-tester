import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3938Component } from './comp-3938.component';

describe('Comp3938Component', () => {
  let component: Comp3938Component;
  let fixture: ComponentFixture<Comp3938Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3938Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3938Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
