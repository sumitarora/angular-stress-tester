import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3763Component } from './comp-3763.component';

describe('Comp3763Component', () => {
  let component: Comp3763Component;
  let fixture: ComponentFixture<Comp3763Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3763Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3763Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
