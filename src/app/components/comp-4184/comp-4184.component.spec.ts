import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4184Component } from './comp-4184.component';

describe('Comp4184Component', () => {
  let component: Comp4184Component;
  let fixture: ComponentFixture<Comp4184Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4184Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
