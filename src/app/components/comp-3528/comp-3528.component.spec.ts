import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3528Component } from './comp-3528.component';

describe('Comp3528Component', () => {
  let component: Comp3528Component;
  let fixture: ComponentFixture<Comp3528Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3528Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3528Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
