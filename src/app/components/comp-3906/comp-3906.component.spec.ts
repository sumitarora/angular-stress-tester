import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3906Component } from './comp-3906.component';

describe('Comp3906Component', () => {
  let component: Comp3906Component;
  let fixture: ComponentFixture<Comp3906Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3906Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3906Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
