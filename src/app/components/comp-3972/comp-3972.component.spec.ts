import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3972Component } from './comp-3972.component';

describe('Comp3972Component', () => {
  let component: Comp3972Component;
  let fixture: ComponentFixture<Comp3972Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3972Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3972Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
