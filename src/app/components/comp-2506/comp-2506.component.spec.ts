import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2506Component } from './comp-2506.component';

describe('Comp2506Component', () => {
  let component: Comp2506Component;
  let fixture: ComponentFixture<Comp2506Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2506Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2506Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
