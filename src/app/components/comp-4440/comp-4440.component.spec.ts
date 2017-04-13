import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4440Component } from './comp-4440.component';

describe('Comp4440Component', () => {
  let component: Comp4440Component;
  let fixture: ComponentFixture<Comp4440Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4440Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4440Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
