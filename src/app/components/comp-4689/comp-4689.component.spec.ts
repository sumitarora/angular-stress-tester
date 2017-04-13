import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4689Component } from './comp-4689.component';

describe('Comp4689Component', () => {
  let component: Comp4689Component;
  let fixture: ComponentFixture<Comp4689Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4689Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4689Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
