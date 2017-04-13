import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3576Component } from './comp-3576.component';

describe('Comp3576Component', () => {
  let component: Comp3576Component;
  let fixture: ComponentFixture<Comp3576Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3576Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3576Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
