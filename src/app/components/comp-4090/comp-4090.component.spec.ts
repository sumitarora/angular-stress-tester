import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4090Component } from './comp-4090.component';

describe('Comp4090Component', () => {
  let component: Comp4090Component;
  let fixture: ComponentFixture<Comp4090Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4090Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4090Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
