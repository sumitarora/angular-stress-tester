import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp141Component } from './comp-141.component';

describe('Comp141Component', () => {
  let component: Comp141Component;
  let fixture: ComponentFixture<Comp141Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp141Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
